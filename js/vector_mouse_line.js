function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  
  let v = p5.Vector.sub(mouse, pos);
  
  translate(width / 2, height /2);
  strokeWeight(4);
  stroke('rgba(0,255,0,0.25)');
  line(0, 0, v.x, v.y);
}