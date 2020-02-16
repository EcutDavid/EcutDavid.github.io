class QrGenerator {
  constructor() {
    const container = document.querySelector("#qrContaienr");
    this.oldContent = "";
    this.qr = new QRCode(container, this.oldContent);
    this.img = container.querySelector("img");
  }

  generate(content) {
    if (content == this.oldContent) return Promise.resolve(this.img);
    return new Promise(resolve => {
      const oldSrc = this.img.src;
      this.qr.clear();
      this.qr.makeCode(content);
      const timerId = setInterval(() => {
        const newSrc = this.img.src;
        if (oldSrc == newSrc) return;

        clearInterval(timerId);
        this.oldContent = content;
        resolve(this.img);
      });
    });
  }
}

function showStep(index) {
  steps.forEach(s => (s.style.display = "none"));
  steps[index].style.display = "block";
}

const qrGenerator = new QrGenerator();
const zip = new JSZip();

const urlsInput = document.querySelector("#urlsInput");
const confirmUrlsButton = document.querySelector("#confirmUrls");
const drawer = document.querySelector("#drawer");
// Otherwise, we would have trouble getting the raw data from the canvas.
drawer.setAttribute("crossorigin", "anonymous");
let qrContents = [];
urlsInput.textContent = "https://google.com\nhttps://canva.com";

urlsInput.addEventListener("keyup", () => {
  confirmUrlsButton.disabled = parseQrContents().length === 0;
});
function parseQrContents() {
  return urlsInput.value
    .split("\n")
    .map(d => d.trim())
    .filter(d => !!d);
}

confirmUrlsButton.addEventListener("click", () => {
  qrContents = parseQrContents();
  showStep(1);
  createPoster();
});

const steps = [];
for (let i = 1; i <= 4; i++) steps.push(document.querySelector(`#step${i}`));

function createPoster() {
  Canva.DesignButton.initialize({
    apiKey: "PS2niACLJW8v8wQBtgB3c85o",
    container: steps[1]
  }).then(api => {
    api.createDesign({
      type: "Poster",
      onPublishCallback: exportUrl => {
        showStep(2);
        drawBox(exportUrl);
      }
    });
  });
}

function drawBox(exportUrl) {
  const indicator = document.querySelector("#boxIndicator");
  drawer.src = exportUrl;
  let drawing = false;
  let okayToConfirm = false;
  let pointA, pointB, boxPos, imgDimensions;
  const readyToBatch = document.querySelector("#readyToBatch");
  readyToBatch.addEventListener("click", () => {
    showStep(3);
    batchProcess(imgDimensions, boxPos);
  });

  function draw() {
    const length = Math.min(
      Math.abs(pointA.x - pointB.x),
      Math.abs(pointA.y - pointB.y)
    );
    okayToConfirm = length >= 10;
    const realB = {
      x: pointA.x + length * (pointA.x < pointB.x ? 1 : -1),
      y: pointA.y + length * (pointA.y < pointB.y ? 1 : -1)
    };

    const leftTop = {
      x: Math.min(pointA.x, realB.x),
      y: Math.min(pointA.y, realB.y)
    };
    indicator.style.left = `${leftTop.x}px`;
    indicator.style.top = `${leftTop.y}px`;
    indicator.style.width = `${length}px`;
    indicator.style.height = `${length}px`;
    boxPos = { x: leftTop.x, y: leftTop.y, length };
  }

  function toggleConfirmButton() {
    readyToBatch.style.display = okayToConfirm ? "inline-block" : "none";
  }

  drawer.onload = () => {
    imgDimensions = { width: drawer.clientWidth, height: drawer.clientHeight };
    document.body.addEventListener("mouseup", () => {
      if (drawing) {
        toggleConfirmButton();
      }
      drawing = false;
    });

    drawer.addEventListener("mousedown", e => {
      drawing = true;
      pointA = { x: e.offsetX, y: e.offsetY };
      indicator.style.left = `${pointA.x}px`;
      indicator.style.top = `${pointA.y}px`;
      indicator.style.width = 0;
      indicator.style.height = 0;
    });

    drawer.addEventListener("mousemove", e => {
      pointB = { x: e.offsetX, y: e.offsetY };
      if (drawing) draw();
    });
  };
}

function batchProcess(imgDimensions, boxPos) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.setAttribute("width", imgDimensions.width);
  canvas.setAttribute("height", imgDimensions.height);
  ctx.drawImage(drawer, 0, 0, imgDimensions.width, imgDimensions.height);

  function process(index) {
    qrGenerator.generate(qrContents[index++]).then(img => {
      ctx.drawImage(img, boxPos.x, boxPos.y, boxPos.length, boxPos.length);
        zip.file(
          `${index}.png`,
          canvas.toDataURL().replace("data:image/png;base64,", ""),
          { base64: true }
        );
      if (index < qrContents.length) {
        process(index);
      } else {
        zip.generateAsync({ type: "blob" }).then((content) => {
          document.querySelector("#processDescription").style.display = "none";
          document.querySelector("#downloadZip").addEventListener("click", () => {
            saveAs(content, "images.zip");
          });
          document.querySelector("#restart").addEventListener("click", () => {
            showStep(0);
          });
        });
      }
    });
  }

  process(0);
}
