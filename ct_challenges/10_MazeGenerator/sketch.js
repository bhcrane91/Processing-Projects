var cols, rows;
var w = 40;
var grid = [];
var stack = [];
var current;

function setup() {
    createCanvas(800, 800);
    cols = floor(width/w);
    rows = floor(height/w);

    for (let i = 0; i < rows; i++)
    {
        for (let j = 0; j < cols; j++)
        {
            grid.push(new Cell(j,i));
        }
    }
    current = grid[0];
    frameRate(20);
    
}

function draw() {
    background(200);
    for (let i = 0; i < grid.length; i++)
    {
        grid[i].show();
    }
    current.visited = true;
    current.highlight();
    // step 1
    //console.log(current);
    var next = current.checkNeighbors();
    if (next)
    {
        next.visited = true;
        // step 2
        stack.push(current);
        // step 3
        removeWalls(current, next);
        // step 4
        current = next;
    }
    else if (stack.length > 0)
    {
        current = stack.pop();
    }
}

function removeWalls(a,b)
{
    var x = a.i - b.i;
    if (x === 1)
    {
        a.walls[3] = false;
        b.walls[1] = false;
    }
    else if (x === -1)
    {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y === 1)
    {
        a.walls[0] = false;
        b.walls[2] = false;
    }
    else if (y === -1)
    {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
