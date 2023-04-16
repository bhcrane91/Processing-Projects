function setup() {
  createCanvas(800, 800);
  background(50);
  
}

var lastx = 0;
var lasty = 0;
var v = p5.Vector.random2D().mult(200);
function draw() {
  translate(width/2, height/2);
  strokeWeight(5);
  stroke(158,50);
  line(v.x,v.y,lastx,lasty);
  lastx = v.x;
  lasty = v.y;
  v = p5.Vector.random2D().mult(200);
}
