var astar = {

    init: function(grid) 
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
    },
    

    heap: function() 
    {
        return new BinaryHeap(function(node) 
        { 
            return node.f; 
        });
    },
    
    
    search: function(grid) 
    {
        
        // init nodes //
        astar.init(grid);

        // start position //
        start = grid[0][0];

        // init heap //
        var openHeap = astar.heap();

        // insert fist node to heap //
        openHeap.push(start);

        while(openHeap.size() > 0) 
        {

            // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
            var currentNode = openHeap.pop();

            // End case -- result has been found, return the traced path.
            if(currentNode.type === OBJECT.KEY) 
            {
                var curr = currentNode;
                var ret = [];
                
                while(curr.parent) 
                {
                    ret.push(curr);
                    curr = curr.parent;
                }
                return ret.reverse();
            }

            // Normal case -- move currentNode from open to closed, process each of its neighbors.
            currentNode.closed = true;

            // Find all neighbors for the current node.
            var neighbors = astar.neighbors(grid, currentNode);

            for(var i=0, il = neighbors.length; i < il; i++) 
            {
                var neighbor = neighbors[i];

                if(neighbor.closed || neighbor.type == OBJECT.ROCK) 
                {
                    // Not a valid node, skip to next neighbor.
                    continue;
                }

                // The g score is the shortest distance from start to current node.
                // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
                var gScore = currentNode.g + neighbor.cost;
                var beenVisited = neighbor.visited;

                if(!beenVisited || gScore < neighbor.g) 
                {

                    // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
                    neighbor.visited = true;
                    neighbor.parent = currentNode;
                    neighbor.h = neighbor.h;
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

        // No found solution to this graph //
        return STATUS.ERROR;
    },
    
    
    neighbors: function(grid, node) 
    {
        var ret = [];
        var x = node.x;
        var y = node.y;

        // UP
        if(grid[x-1] && grid[x-1][y]) 
        {
            ret.push(grid[x-1][y]);
        }

        // DOWN
        if(grid[x+1] && grid[x+1][y]) 
        {
            ret.push(grid[x+1][y]);
        }

        // LEFT
        if(grid[x] && grid[x][y-1]) 
        {
            ret.push(grid[x][y-1]);
        }

        // RIGHT
        if(grid[x] && grid[x][y+1]) 
        {
            ret.push(grid[x][y+1]);
        }

        return ret;
    }
};


