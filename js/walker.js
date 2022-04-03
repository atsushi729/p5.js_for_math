class Walker {
  constructor(x, y){
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D()
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(255, 50);
    ellipse(this.pos.x, this.pos.y, 12)
  }
}