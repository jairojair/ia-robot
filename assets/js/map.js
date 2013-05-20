/*
 *
 * Map Class
 *
 */

var Map = function()
{

    this.mapSize = 10;
    this.map = false;


    // get position //
    this.getMap = function () 
    {
        return this.map;
    }


    // create static map //
    this.staticMap = function()
    {
    
        return  this.map = Array (

                    [5,1,0,0,2,0,0,0,0,1],
                    [0,1,1,1,1,0,1,1,1,1],
                    [0,3,0,0,0,0,0,0,0,0],
                    [0,1,1,1,3,0,0,1,2,0],
                    [0,0,0,1,1,0,0,1,1,0],
                    [0,1,0,1,2,0,0,1,0,0],
                    [0,3,0,0,0,1,1,1,3,1],
                    [0,0,1,0,0,0,0,1,0,1],
                    [0,0,1,0,1,0,0,0,0,0],
                    [0,0,1,0,1,2,0,1,1,4]
                    );
    
    }

    // create dinamic map //
    this.dinamicMap = function ()
    {
        // the code //
    }


    // rendering map on screen //
    this.renderingMap = function(idName,newMap)
    {

        for( x=0;  x < this.mapSize; x++)
        {
            for( y=0; y < this.mapSize; y++)
            {
                $(idName).append('<li class="Bloco '+newMap[x][y]+'"> '+ (x+1) +' , '+ (y+1) +' </li>');
                //console.log (x+1,y+1);
            }
        }


        $('.Bloco').each(function() 
            {

                if ($(this).hasClass('0')) 
                {
                    $(this).addClass('Grama');
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


}












