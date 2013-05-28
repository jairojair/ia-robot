/*
 *
 * Map Class
 *
 */

var Map = function()
{

    this.mapName = "#mapa";
    this.mapSize = 10;
    this.map = false;


    // get current map //
    this.getMap = function () 
    {
        return this.map;
    }


    // create static map //
    this.staticMap = function()
    {
    
        return  this.map = ([

                    [5,1,0,0,2,0,0,0,0,1],
                    [0,1,1,1,1,0,1,1,1,1],
                    [0,3,0,0,0,0,0,0,0,0],
                    [0,1,1,1,3,0,0,1,2,4],
                    [0,0,0,1,1,0,0,1,1,0],
                    [0,1,0,1,2,0,0,1,0,0],
                    [0,3,0,0,0,1,1,1,3,1],
                    [0,0,1,0,0,0,0,1,0,1],
                    [0,0,1,0,1,0,0,0,0,0],
                    [0,0,1,0,1,2,0,1,1,0]
                    ]);
    
    }

    // create dinamic map //
    this.dinamicMap = function ()
    {
        // the code //
    }


    // rendering map on screen //
    this.renderingMap = function(newMap)
    {

        for( x=0;  x < this.mapSize; x++)
        {
            for( y=0; y < this.mapSize; y++)
            {
                $(this.mapName).append('<li class="Block '+newMap[x][y]+'"> '+ (x+1) +' , '+ (y+1) +' </li>');
                //console.log (x+1,y+1);
            }
        }


        $('.Block').each(function() 
            {

                if ($(this).hasClass('0')) 
                {
                    $(this).addClass('Grass');
                }

                if ($(this).hasClass('1')) 
                {
                    $(this).addClass('Rock');
                }

                if ($(this).hasClass('2')) 
                {
                    $(this).addClass('Heart-10');
                }

                if ($(this).hasClass('3')) 
                {
                    $(this).addClass('Heart-5');
                }

                if ($(this).hasClass('4')) 
                {
                    $(this).addClass('Key');
                }

                if ($(this).hasClass('5')) 
                {
                    $(this).addClass('Char');
                }
            
            }
        );

    }


    // get position //
    this.getMapPosition = function (newMap,x, y) 
    {
        return newMap[x][y]; 
    }

    
    // set position //
    this.setMapPosition = function (x,y, newValue) 
    {
        this.map[x][y] = newValue;
    }

    // rendering cell //
    this.renderingCell = function(cellPos)
    {
        this.setMapPosition(cellPos.x-1, cellPos.y-1, 0);
    }


    this.getMapValue = function (newMap, value)
    {
        for( x=0;  x < this.mapSize; x++)
        {
            for( y=0; y < this.mapSize; y++)
            {
                if(newMap[x][y] == value)
                {
                    endPos = {x: x, y: y};
                    return endPos;
                }
            }
        }
    }

}



