/*
 *
 * Map Class
 *
 */

var Map = function()
{

    this.mapName = "#mapa";
    this.mapSize = 10;
    this.map = [];


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
                    [0,1,1,1,3,0,0,1,2,0],
                    [0,0,0,1,1,0,0,1,1,0],
                    [0,1,0,1,2,0,0,1,0,0],
                    [0,3,0,0,0,1,1,1,3,1],
                    [0,0,1,0,0,0,0,1,0,1],
                    [0,0,1,0,1,0,0,0,0,0],
                    [0,0,1,0,1,2,0,1,1,4]
                    ]);
    
    }

    // create dinamic map //
    this.dinamicMap = function ()
    {

        var map = [];

        for (var x=0; x < this.mapSize; x++) 
        {
            var row = [];

            for(var y=0; y < this.mapSize; y++) 
            {

                var isWall = Math.floor(Math.random()*(1/.3));

                if(isWall == 0) 
                {
                    row.push(OBJECT.ROCK);
                }
                else  {
                    row.push(OBJECT.GRASS);
                }
            }
            
            map.push(row);
        }

        map[0][0] = OBJECT.CHAR;

        for (var i = 0; i < 4; i++) 
        {
           hdez1 = Math.floor(Math.random()*(1/.10));
           hdez2 = Math.floor(Math.random()*(1/.10));
           map[hdez1][hdez2] = OBJECT.HEART5;
        };

        for (var i = 0; i < 2; i++) 
        {
           hcinco1 = Math.floor(Math.random()*(1/.10));
           hcinco2 = Math.floor(Math.random()*(1/.10));
           map[hcinco1][hcinco2] = OBJECT.HEART10;
        };


        pos1 = Math.floor(Math.random()*(1/.10));
        pos2 = Math.floor(Math.random()*(1/.10));

        //map[9][9] = OBJECT.KEY;
        map[pos1][pos2] = OBJECT.KEY;
        
        this.map = map;
        return this.map;
    }


    // rendering map on screen //
    this.renderingMap = function(newMap)
    {

        for( x=0;  x < this.mapSize; x++)
        {
            for( y=0; y < this.mapSize; y++)
            {
                $(this.mapName).append('<li class="Block '+newMap[x][y]+'"> '+ (x) +' , '+ (y) +' </li>');
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
        this.setMapPosition(cellPos.x, cellPos.y, 0);
    }

    // test map //
    this.testMap = function ()
    {

        // create Graph //
        cGraph  = new Graph(this.getMap());
        cHelper = new Helper();
        cSearch = new Search(); 

        // search path //
        result = cSearch.Astar(cGraph.nodes);

        if(result != STATUS.ERROR)
        {
            console.log("testMap: Mapa tem solução");
            //cHelper.printElement(result);
            console.log(result.length);

            return STATUS.SUCCESS;
        }

        console.log("testMap: Mapa sem solução");
        return STATUS.ERROR;

    }

}



