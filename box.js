class Box {
  constructor(x, y, z, size) {
    this.pos = createVector(x, y, z);
    this.size = size;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.size);
    pop();
  }
}
