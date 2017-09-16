function initCanvas(canvas): CanvasRenderingContext2D {
  canvas.style.letterSpacing = '4px';
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = 1000;
  ctx.canvas.height = 100;
  ctx.strokeStyle = 'rgb(255, 0, 0)';
  ctx.font = '30px Open Sans';
  return ctx;
}

export default function (text: string) {
  const canvas = document.createElement('canvas');
  const ctx = initCanvas(canvas);

  ctx.fillText(text, 0, 22);

  const result = [];
  const data = ctx.getImageData(0, 0, 1000, 1000).data;
  data.forEach((d, i) => {
    if (d === 255) {
      const x = Math.floor(Math.floor(i / 4) % 1000);
      const y = Math.floor(Math.floor(i / 4) / 1000);
      result.push([x, y]);
      // if (result.every(([rx, ry]) => (rx - x > 2) || (ry - y > 2) || (Math.pow(rx - x, 2) + Math.pow(ry - y, 2) > 4))) {
      //   result.push([x, y]);
      // }
    }
  });
  return result;
}
