function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  
  // let v = createVector(random(-100, 100), random(-100, 100));
  v = p5.Vector.random2D()
  v.mult(random(-50, 100));
  // v.mult(100);
  
  strokeWeight(4);
  stroke('rgba(0,255,0,0.25)');
  line(0, 0, v.x, v.y);
}