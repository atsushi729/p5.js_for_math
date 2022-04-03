class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }
  
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);
    
    this.vel.add(this.acc);
    this.vel.limit(3);

    this.pos.add(this.vel);
    }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(25, 100);
    ellipse(this.pos.x, this.pos.y, 37)
  }
}

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
  background(0);
}

function draw() {
  mover.update();
  mover.show();
}