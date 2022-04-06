class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.r = 16; 
  }
  
   applyForce(force) {
    this.acc.add(force);
  }
  
  edges() {
    if (this.pos.y >= height-this.r) {
      this.pos.y = height-this.r;
      this.vel.y *= -1;
    }
    
    if (this.pos.x >= width-this.r) {
      this.pos.x = width-this.r;
      this.vel.x *= -1;
     } else if(this.pos.x <= 0) {
       this.pos.x = this.r;
       this.vel.x *= -1;
    }
  }
  
  update() {
//     let mouse = createVector(mouseX, mouseY);
//     this.acc = p5.Vector.sub(mouse, this.pos);
//     this.acc.setMag(0.1);
    
    this.vel.add(this.acc);
    // this.vel.limit(3);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(25, 100);
    ellipse(this.pos.x, this.pos.y, this.r*2)
  }
}

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);
    
  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);
  
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  
  mover.edges();
  mover.update();
  mover.show();
}