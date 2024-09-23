let angle = 0;
let b;

function setup() {
  createCanvas(400, 400, WEBGL);

  b = new Box(0, 0, 0, 200);
}

function draw() {
  background(0);
  lights();

  rotateX(angle);
  b.show();

  angle += 0.01;
}
