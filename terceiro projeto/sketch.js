let isMousePressed = false;

// Move the mouse across the canvas to leave a trail
function setup() {
  createCanvas(720, 560);
  //slow down the frameRate to make it more visible
  frameRate(10);
  stroke(255,0,0)
}

function draw() {
  background(250, 256, 250);
  line(200, 0, pmouseX, pmouseY);
  line(100 , 0, pmouseX, pmouseY);

  if (isMousePressed) {
    stroke(0,0,0);
    line(pmouseX, pmouseY, mouseX, mouseY);
    push();
    pop();
  }

  stroke(255,0,0)
  print(pmouseX + ' -> ' + mouseX);
  describe(`line trail is created from cursor movements.
    faster movement make longer line.`);
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}
