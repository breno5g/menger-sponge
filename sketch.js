let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  lights();

  rotateX(angle);
  box(200);

  angle += 0.01;
}
