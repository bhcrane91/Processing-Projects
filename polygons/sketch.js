var genome;
var generations = 100;
var epoch = 0;

function setup() 
{
    createCanvas(400, 400);
    genome = new Polygon(3,100);
    genome.gene_pool();
    background(50);
}

function draw() 
{
    translate(width/2, height/2);
    genome.selection();
    genome.show();
    genome.mutation();
    epoch += 1;
    if (epoch >= generations)
    {
        noLoop();
    }
}
