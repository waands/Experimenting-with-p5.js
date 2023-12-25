function setup() {
  createCanvas(720, 560);
  noStroke();
  noLoop();
}

function draw() {
  drawCircle(width / 2, 280, 6);
}

function drawCircle(x, radius, level) {
  const tt = (126 * level) / 4.0;
  
  fill(tt, random(1, 256), random(1, 256));
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}

function mouseClicked() {
  redraw(); // Redesenha a tela para mudar as cores quando o mouse é clicado
}
