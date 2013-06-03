/*
 *
 * Search Class
 *
 */
var Search = function ()
{


	// init
	this.init = function(grid) 
    {
        
        for(var x = 0, xl = grid.length; x < xl; x++) 
        {
            
            for(var y = 0, yl = grid[x].length; y < yl; y++) 
            {
                var node = grid[x][y];
                node.f = 0;
                node.g = 0;
                node.h = 0;
                node.cost = node.type;
                node.visited = false;
                node.closed = false;
                node.parent = null;
            }
        }
    }


	// heap
	this.heap = function() 
    {
        return new BinaryHeap(function(node) 
        { 
            return node.f; 
        });
    }

	// vizinhos
	this.neighbors = function(grid, node) 
    {
        var ret = [];
        var x = node.x;
        var y = node.y;

        // UP
        if(grid[x-1] && grid[x-1][y]) 
        {
            ret.push(grid[x-1][y]);
           //console.log("-> up", grid[x-1][y].x, grid[x-1][y].y);
        }

        // DOWN
        if(grid[x+1] && grid[x+1][y]) 
        {
            ret.push(grid[x+1][y]);
            //console.log("-> down", grid[x+1][y].x, grid[x+1][y].y);
        }

        // RIGHT
        if(grid[x] && grid[x][y+1]) 
        {
            ret.push(grid[x][y+1]);
            //console.log("-> right",grid[x][y+1].x, grid[x][y+1].y);
        }

         // LEFT
        if(grid[x] && grid[x][y-1]) 
        {
            ret.push(grid[x][y-1]);
            //console.log("-> left", grid[x][y-1].x, grid[x][y-1].y);
        }

        return ret;
    }

	// Usado para validar mapa e buscar caminho //
	this.Astar = function(grid, startx, starty, endx, endy, pathReal) 
    {

        this.init(grid);
        var openHeap = this.heap();

        var path = [];
        
        if (startx == null)
        {
            // busca chave
            start = grid[0][0];
            end = null;
        }
        else{
            // Busca posicao 
            start = grid[startx][starty];
            end = grid[endx][endy];
        }

        openHeap.push(start);

        while(openHeap.size() > 0) 
        {

            // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
            var currentNode = openHeap.pop();

            path.push(currentNode);

            // End case -- result has been found, return the traced path.
            if(currentNode.type === OBJECT.KEY || currentNode === end) 
            {
                if(pathReal == true)
                {
                    return path;
                }

                var curr = currentNode;
                var ret = [];
                
                while(curr.parent) 
                {
                    ret.push(curr);
                    curr = curr.parent;
                }
                return ret.reverse();
            }


            currentNode.closed = true;

            // Busca todos os parentes para o atual nó
            var neighbors = this.neighbors(grid, currentNode);


            for(var i=0, il = neighbors.length; i < il; i++) 
            {
                var neighbor = neighbors[i];

                if(neighbor.closed || neighbor.type == OBJECT.ROCK) 
                {
                    // Not a valid node, skip to next neighbor.
                    continue;
                }

                // The g score is the shortest distance from start to current node.
                // Check if the path is smaller than all.
                var gScore = currentNode.g + neighbor.cost;

                if(neighbor.type == OBJECT.HEART10) 
                {
                    gScore = 10;
                }

                if(neighbor.type == OBJECT.HEART5) 
                {
                    gScore = 5;
                }

                var beenVisited = neighbor.visited;

                if(!beenVisited || gScore < neighbor.g) 
                {

                    // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
                    neighbor.visited = true;
                    neighbor.parent = currentNode;
                    neighbor.h = neighbor.h
                    neighbor.g = gScore;
                    neighbor.f = neighbor.g + neighbor.h;

                    if (!beenVisited) 
                    {
                        // Pushing to heap will put it in proper place based on the 'f' value.
                        openHeap.push(neighbor);
                        //console.log(neighbor);
                    }
                    else {
                        // Already seen the node, but since it has been rescored we need to reorder it in the heap
                        openHeap.rescoreElement(neighbor);
                        //console.log(neighbor);
                    }
                }
            }
        }

        // nao foi encontrado solução
        return STATUS.ERROR;
    }

}