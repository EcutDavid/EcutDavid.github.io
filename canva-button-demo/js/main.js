const sizeInputs = document.querySelectorAll('.sizeDemo input');
const sizeButton = document.querySelector('.sizeDemo button');


function run(targetOrigin) {
  CreateCanvaButton(targetOrigin)
    .initialize('aHhBQPawqx_TovSz5J2sj0CL')
    .then(d => {
      console.log("get initilizedapi")
      setupEventHandlers(d);
    });
}

function setupEventHandlers(api) {
  let processing = false;
  sizeButton.addEventListener('click', () => {
    if (processing) return;
    processing = true;
    setTimeout(() => processing = false, 2000);

    const w = sizeInputs[0].value;
    const h = sizeInputs[1].value;
    api.createDesign({
      type: 'Card',
      onPublishCallback: (exportUrl) => {
        const img = document.createElement('img');
        img.src = exportUrl;
        document.body.appendChild(img);
      },
      width: w,
      height: h
    })
  })

  function updateSizeButton() {
    const w = sizeInputs[0].value;
    const h = sizeInputs[1].value;
    sizeButton.innerText = `Click me to create a ${w} px * ${h} px design`
  }

  sizeInputs.forEach(d => {
    d.addEventListener('input', e => {
      let newVal = Number.parseInt(d.value);
      if (Number.isNaN(newVal)) {
        newVal = 400;
      }
      newVal = Math.max(100, newVal);
      newVal = Math.min(2000, newVal);
      if (d.dataset.old == newVal) return;
      d.dataset.old = newVal;
      d.value = newVal;
      updateSizeButton();
    })
  })
  updateSizeButton();
}
