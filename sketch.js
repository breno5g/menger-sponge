let angle = 0;
let sponge = [];
let MAX_CLICKS = 2;
let clicks = 0;

let checkbox;
let range;
let resetBtn;

function setup() {
  createCanvas(400, 400, WEBGL);

  const b = new Box(0, 0, 0, 200);
  sponge.push(b);

  checkbox = createCheckbox(' normal material', false);
  checkbox.changed(() => {
    if (checkbox.checked()) {
      normalMaterial();
    } else {
      emissiveMaterial(0, 0, 0);
    }
  });

  range = createSlider(1, 3, 2, 1);
  range.changed(() => {
    MAX_CLICKS = range.value();
  });

  resetBtn = createButton('reset');
  resetBtn.mousePressed(() => {
    sponge = [];
    clicks = 0;

    const b = new Box(0, 0, 0, 200);
    sponge.push(b);
  });
}

function mousePressed({ target }) {
  if (target.id !== 'defaultCanvas0') return;

  if (clicks >= MAX_CLICKS) return;
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
