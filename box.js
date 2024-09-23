class Box {
  constructor(x, y, z, size) {
    this.pos = createVector(x, y, z);
    this.size = size;
  }

  generate() {
    let boxes = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          var sum = abs(x) + abs(y) + abs(z);
          const newSize = this.size / 3;
          if (sum > 1) {
            const b = new Box(
              this.pos.x + x * newSize,
              this.pos.y + y * newSize,
              this.pos.z + z * newSize,
              newSize
            );
            boxes.push(b);
          }
        }
      }
    }

    return boxes;
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.size);
    pop();
  }
}
