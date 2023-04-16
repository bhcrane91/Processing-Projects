var stars = [];
var num_stars = 500;
var speed;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < num_stars; i++)
  {
    stars[i] = new Star();
  }
}

function draw() {
  speed = 1;
  background(0);
  translate(width/2, height/2);
  for (var i = 0; i < num_stars; i++)
  {
    stars[i].update();
    stars[i].show();
  }
}
