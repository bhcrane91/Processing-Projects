function Polygon(vertices, num_genes)
{
    this.pool = [];
    this.num_genes = num_genes;
    this.best_shape = [];
    this.vertices = vertices;
    this.best = [];

    this.gene_pool = function()
    {
        for (let i in this.num_genes)
        {
            gene = [];
            for (let v in this.vertices)
            {
                gene.push(new p5.Vector.random2D());
            }
            this.pool.push(gene);
        }
    }

    this.selection = function()
    {
        rankings = new Map();
        for (let gene of this.pool)
        {
            rankings.set(this.fitness(gene), gene);
        }
        rankings = new Map([...rankings].sort());
        rankings = Array.from(rankings.values());
        this.best = rankings[0];
        this.pool = rankings.slice(0,floor(0.1*this.num_genes));
    }

    this.potential = function(a,b)
    {
        x = a.x - b.x;
        y = a.y - b.y;
        return 1 / sqrt(x*x + y*y);
    }

    this.fitness = function(gene)
    {
        score = 0;
        for (let i = 0; i < gene.length; i++)
        {
            for (let j = 0; j < gene.length - i - 1; j++)
            {
                score += potential(gene[i], gene[i+j+1]);
            }
        }
        if (score == 0)
        {
            return 99999;
        }
        else 
        {
            return score;
        }
    }

    this.mutation = function()
    {
        coords = [];
        for (let r of this.pool)
        {
            coords.push(r.x);
            coords.push(r.y);
        }
        gene_pool = [];
        for (let i in this.num_genes)
        {
            gene = [];
            for (let j in this.vertices)
            {
                x = coords[floor(random(0,coords.length))] * random(0.99,1.01);
                y = coords[floor(random(0,coords.length))] * random(0.99,1.01);
                gene.push(createVector(x,y));
            }
            gene_pool.push(gene);
        }
        this.pool = gene_pool;
    }

    this.show = function()
    {
        console.log(this.best);
        for (let pt of this.best)
        {
            ellipse(pt.x, pt.y,10,10);
        }
    }
}