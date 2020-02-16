class QrGenerator {
  constructor() {
    const container = document.querySelector('#qrContaienr');
    this.oldContent = '';
    this.qr = new QRCode(container, this.oldContent);
    this.img = container.querySelector('img');
  }

  generate(content) {
    if (content == this.oldContent) return Promise.resolve(this.img.src);
    this.qr.makeCode(content);
    return new Promise(resolve => {
      const oldSrc = this.img.src;
      const timerId = setInterval(() => {
        const newSrc = this.img.src;
        if (oldSrc == newSrc) return;

        clearInterval(timerId);
        this.oldContent = content;
        resolve(newSrc);
      });
    });
  }
}

function downloadImage(name, content) {
  var link = document.createElement('a');
  link.href = content;
  link.download = name;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showStep(index) {
  steps.forEach(s => (s.style.display = 'none'));
  steps[index].style.display = 'block';
}

const generator = new QrGenerator();
const urlsInput = document.querySelector('#urlsInput');
const confirmUrlsButton = document.querySelector('#confirmUrls');
let urls = [];
urlsInput.textContent = 'https://google.com\nhttps://canva.com';
confirmUrlsButton.addEventListener('click', () => {
  urls = urlsInput.value
    .split('\n')
    .map(d => d.trim())
    .filter(d => !!d);
  showStep(1);
  createPoster();
});

const steps = [];
for (let i = 1; i <= 4; i++) steps.push(document.querySelector(`#step${i}`));

function createPoster() {
  Canva.DesignButton.initialize({
    apiKey: 'PS2niACLJW8v8wQBtgB3c85o',
    container: steps[1]
  }).then(api => {
    api.createDesign({
      type: 'Poster',
      onPublishCallback: exportUrl => {
        showStep(2);
        batchProcess(exportUrl);
      }
    });
  });
}

function batchProcess(exportUrl) {
  const drawer = document.querySelector('#drawer');
  const indicator = document.querySelector('#boxIndicator');
  drawer.src = exportUrl;
  let drawing = false;
  let okayToConfirm = false;
  let pointA, pointB;
  const readyToBatch = document.querySelector('#readyToBatch');
  readyToBatch.addEventListener('click', () => {
    showStep(2);
  });

  function draw() {
    const distance = Math.min(
      Math.abs(pointA.x - pointB.x),
      Math.abs(pointA.y - pointB.y)
    );
    okayToConfirm = distance >= 10;
    const realB = {
      x: pointA.x + distance * (pointA.x < pointB.x ? 1 : -1),
      y: pointA.y + distance * (pointA.y < pointB.y ? 1 : -1)
    };

    const leftTop = {
      x: Math.min(pointA.x, realB.x),
      y: Math.min(pointA.y, realB.y)
    };
    indicator.style.left = `${leftTop.x}px`;
    indicator.style.top = `${leftTop.y}px`;
    indicator.style.width = `${distance}px`;
    indicator.style.height = `${distance}px`;
  }

  function confirm() {
    readyToBatch.style.display = okayToConfirm ? 'inline-block' : 'none';
  }

  drawer.onload = () => {
    document.body.addEventListener('mouseup', () => {
      if (drawing) {
        confirm();
      }
      drawing = false;
    });

    drawer.addEventListener('mousedown', e => {
      drawing = true;
      pointA = { x: e.offsetX, y: e.offsetY };
      indicator.style.left = `${pointA.x}px`;
      indicator.style.top = `${pointA.y}px`;
      indicator.style.width = 0;
      indicator.style.height = 0;
    });

    drawer.addEventListener('mousemove', e => {
      pointB = { x: e.offsetX, y: e.offsetY };
      if (drawing) draw();
    });
  };
}

