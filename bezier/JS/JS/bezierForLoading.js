// Define canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');





//1
function drawShape(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(336 + xoff, 156 + yoff);
  ctx.bezierCurveTo(356 + xoff, 156 + yoff, 382 + xoff, 164 + yoff, 394 + xoff, 175 + yoff);
  ctx.bezierCurveTo(402 + xoff, 182 + yoff, 418 + xoff, 197 + yoff, 425 + xoff, 215 + yoff);
  ctx.bezierCurveTo(434 + xoff, 238 + yoff, 436 + xoff, 270 + yoff, 426 + xoff, 292 + yoff);
  ctx.bezierCurveTo(420 + xoff, 306 + yoff, 417 + xoff, 311 + yoff, 400 + xoff, 329 + yoff);
  ctx.bezierCurveTo(386 + xoff, 344 + yoff, 360 + xoff, 356 + yoff, 337 + xoff, 356 + yoff);
  ctx.bezierCurveTo(322 + xoff, 356 + yoff, 302 + xoff, 356 + yoff, 283 + xoff, 356 + yoff);
  ctx.bezierCurveTo(268 + xoff, 356 + yoff, 271 + xoff, 359 + yoff, 259 + xoff, 347 + yoff);
  ctx.bezierCurveTo(250 + xoff, 338 + yoff, 222 + xoff, 311 + yoff, 209 + xoff, 298 + yoff);
  ctx.bezierCurveTo(198 + xoff, 287 + yoff, 208 + xoff, 280 + yoff, 221 + xoff, 280 + yoff);
  ctx.bezierCurveTo(238 + xoff, 280 + yoff, 304 + xoff, 280 + yoff, 332 + xoff, 279 + yoff);
  ctx.bezierCurveTo(347 + xoff, 278 + yoff, 355 + xoff, 269 + yoff, 355 + xoff, 256 + yoff);
  ctx.bezierCurveTo(355 + xoff, 244 + yoff, 343 + xoff, 234 + yoff, 330 + xoff, 234 + yoff);
  ctx.bezierCurveTo(315 + xoff, 234 + yoff, 175 + xoff, 235 + yoff, 160 + xoff, 234 + yoff);
  ctx.bezierCurveTo(147 + xoff, 233 + yoff, 148 + xoff, 235 + yoff, 141 + xoff, 228 + yoff);
  ctx.bezierCurveTo(138 + xoff, 225 + yoff, 101 + xoff, 189 + yoff, 87 + xoff, 175 + yoff);
  ctx.bezierCurveTo(74 + xoff, 162 + yoff, 82 + xoff, 157 + yoff, 97 + xoff, 157 + yoff);
  ctx.bezierCurveTo(112 + xoff, 157 + yoff, 351 + xoff, 156 + yoff, 336 + xoff, 156 + yoff);
  ctx.lineWidth=5;
   // Set the fill style
   ctx.fillStyle = "red";

   // Fill the path
   ctx.fill();

}

  drawShape(ctx, 100, 0 );
