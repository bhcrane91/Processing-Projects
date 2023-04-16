function Cell(i,j)
{
    this.col = i; 
    this.row = j;
    this.detWall = function()
    {
        if (this.col == 0 || this.row == 0 
            || this.col == cols-1 || this.row == rows-1)
        {

        }
    }


}