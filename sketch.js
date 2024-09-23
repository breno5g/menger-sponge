let angle = 0;
let sponge = [];
let clicks = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();

  const b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function mousePressed() {
  if (clicks >= 2) return;
  let newSponge = [];
  for (let b of sponge) {
    let newBoxes = b.generate();
    newSponge = newSponge.concat(newBoxes);
  }

  sponge = newSponge;
  clicks++;
}

function draw() {
  background(0);
  lights();

  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  for (const b of sponge) {
    b.show();
  }

  angle += 0.01;
}
