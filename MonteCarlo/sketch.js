var x = [];
var y = [];

function setup() 
{
  createCanvas(400, 400);
  background(50);
  domain();
  f();
}

function draw() 
{
    translate(width/2,height/2);
    stroke(255);
    for (let i = 0; i < 100; i++)
    {
        point(x[i], y[i]);
    }
}

function domain()
{
    for (let i = 0; i < 100; i++)
    {
        x[i] = i;
    }
}

function f()
{
    for (let i = 0; i < x.length; i++)
    {
        y[i] = x[i];
    }
}

