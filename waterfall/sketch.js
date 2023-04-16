var s = 100;
function setup() {
    createCanvas(400, 400);
    
    background(50);
}

function draw() 
{
    translate(width/2, height/2);
    stroke(255);
    fill(255);
    ellipse(0,0,10,10);
    line(100,100,200,200);
}
