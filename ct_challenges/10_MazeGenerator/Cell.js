function Cell(i,j)
{
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    // top, right, bottom, left | clockwise
    this.visited = false; 

    this.index = function(i,j)
    {
        if (i<0 || j<0 || i>cols-1 || j>rows-1)
        {
            return -1;
        }
        return i + j * cols;
    }

    this.highlight = function()
    {
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(0,0,255,100);
        rect(x,y,w,w);
    }

    this.checkNeighbors = function()
    {
        var neighbors = [];
        var top = grid[this.index(i, j-1)];
        var bot = grid[this.index(i, j+1)];
        var lft = grid[this.index(i-1, j)];
        var rgt = grid[this.index(i+1, j)];
        
        if (top && !top.visited)
        {
            neighbors.push(top);
        }
        if (bot && !bot.visited)
        {
            neighbors.push(bot);
        }
        if (lft && !lft.visited)
        {
            neighbors.push(lft);
        }
        if (rgt && !rgt.visited)
        {
            neighbors.push(rgt);
        }

        if (neighbors.length > 0)
        {
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        }
        else 
        {
            return undefined;
        }

    }
    
    this.drawWalls = function(x,y)
    {
        if (this.walls[0])
        {
            line(x  , y  , x+w, y  );
        }
        if (this.walls[1])
        {
            line(x+w, y  , x+w, y+w);
        }
        if (this.walls[2])
        {
            line(x+w, y+w, x  , y+w);
        }
        if (this.walls[3])
        {
            line(x  , y+w, x  , y  );
        }
    }

    this.visit = function(x,y)
    {
        noStroke();
        fill(255, 0, 255, 150);
        rect(x,y,w,w);
    }

    this.show = function()
    {
        var x = this.i * w;
        var y = this.j * w;
        stroke(200);
        noFill();
        this.drawWalls(x,y);
        if (this.visited)
        {
            this.visit(x,y);
        }
    }
}