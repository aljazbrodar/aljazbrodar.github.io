const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');




function drawShape(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(336 + xoff, 156 + yoff);
  ctx.lineWidth = 5;
  // Set the fill style
  ctx.fillStyle = "red";

var xoff = 100;
var yoff = 0;
  const points = [
    { x: 356 + xoff, y: 156 + yoff, cp1x: 382 + xoff, cp1y: 164 + yoff, cp2x: 394 + xoff, cp2y: 175 + yoff },
    { x: 402 + xoff, y: 182 + yoff, cp1x: 418 + xoff, cp1y: 197 + yoff, cp2x: 425 + xoff, cp2y: 215 + yoff },
    { x: 434 + xoff, y: 238 + yoff, cp1x: 436 + xoff, cp1y: 270 + yoff, cp2x: 426 + xoff, cp2y: 292 + yoff },
    { x: 420 + xoff, y: 306 + yoff, cp1x: 417 + xoff, cp1y: 311 + yoff, cp2x: 400 + xoff, cp2y: 329 + yoff },
    { x: 386 + xoff, y: 344 + yoff, cp1x: 360 + xoff, cp1y: 356 + yoff, cp2x: 337 + xoff, cp2y: 356 + yoff },
    { x: 322 + xoff, y: 356 + yoff, cp1x: 302 + xoff, cp1y: 356 + yoff, cp2x: 283 + xoff, cp2y: 356 + yoff },
    { x: 268 + xoff, y: 356 + yoff, cp1x: 271 + xoff, cp1y: 359 + yoff, cp2x: 259 + xoff, cp2y: 347 + yoff },
    { x: 250 + xoff, y: 338 + yoff, cp1x: 222 + xoff, cp1y: 311 + yoff, cp2x: 209 + xoff, cp2y: 298 + yoff },
    { x: 198 + xoff, y: 287 + yoff, cp1x: 208 + xoff, cp1y: 280 + yoff, cp2x: 221 + xoff, cp2y: 280 + yoff },
    { x: 238 + xoff, y: 280 + yoff, cp1x: 304 + xoff, cp1y: 280 + yoff, cp2x: 332 + xoff, cp2y: 279 + yoff },
    { x: 347 + xoff, y: 278 + yoff, cp1x: 355 + xoff, cp1y: 269 + yoff, cp2x: 355 + xoff, cp2y: 256 + yoff },
    { x: 355 + xoff, y: 244 + yoff, cp1x: 343 + xoff, cp1y: 234 + yoff, cp2x: 330 + xoff, cp2y: 234 + yoff },
    { x: 315 + xoff, y: 234 + yoff, cp1x: 175 + xoff, cp1y: 235 + yoff, cp2x: 160 + xoff, cp2y: 234 + yoff },
    { x: 147 + xoff, y: 233 + yoff, cp1x: 148 + xoff, cp1y: 235 + yoff, cp2x: 141 + xoff, cp2y: 228 + yoff },
    { x: 138 + xoff, y: 225 + yoff, cp1x: 101 + xoff, cp1y: 189 + yoff, cp2x: 87 + xoff, cp2y: 175 + yoff },
    { x: 74 + xoff, y: 162 + yoff, cp1x: 82 + xoff, cp1y: 157 + yoff, cp2x: 97 + xoff, cp2y: 157 + yoff },
    { x: 112 + xoff, y: 157 + yoff, cp1x: 351 + xoff, cp1y: 156 + yoff, cp2x: 336 + xoff, cp2y: 156 + yoff },
  ]
  let i = 0;
  const drawNextPoint = () => {
    if (i < points.length) {
      ctx.bezierCurveTo(
        points[i].x, points[i].y,
        points[i].cp1x, points[i].cp1y,
        points[i].cp2x, points[i].cp2y,
      );
      ctx.strokeStyle = "white";
      ctx.stroke();
      i++;
      setTimeout(drawNextPoint, 40);
    } else {
      // Fill the path
      ctx.fill();

    }
  };
  drawNextPoint();
}

drawShape(ctx, 100, 0);















