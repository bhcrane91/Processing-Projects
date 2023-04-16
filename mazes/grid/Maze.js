function Maze(rows,cols)
{
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    
    this.createMatrix = function()
    {
        for (let r = 0; r < rows; r++)
        {
            let vec = [];
            for (let c = 0; c < cols; c++)
            {
                vec.push(new Cell(c,r));
            }
            this.matrix.push(vec);
        }
    }
    
    this.two_to_one_index = function()
    {

    }

    this.one_to_two_index = function()
    {

    }
}