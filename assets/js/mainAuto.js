$('#newGameIA').click ( function()
{

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();
    var mSearch = new Search();

    // Limpa a tela //
    mScreen.clean();

    // cria mapa estatico // 
    mMap.staticMap();

    do {
        // testa se o mapa é valido //
        testResult = mMap.testMap();

    }while (testResult != STATUS.SUCCESS);

    
    // Renderiza Mapa //
    mMap.renderingMap(mMap.getMap());

    // create Graph //
    mGraph = new Graph(mMap.getMap());

    currentNode = mSearch.Astar(mGraph.nodes, mRobot, mMap, mScreen);

//    console.log(currentNode);


    setInterval(function() { main() }, mRobot.getSpeed() );

    i=0;

    function main ()
    {


                robotPos = mRobot.getPos();

                //console.log("Corr x:", currentNode[i].x+1 , currentNode[i].y+1);
                //console.log("Robo x:",robotPos.x, robotPos.y);


                if (currentNode[i].x+1 > robotPos.x)
                {
                    console.log("DOWN");
                    mRobot.look(MOVE.DOWN, mMap, mScreen);
                    i++;
                    return;
                }

                if (currentNode[i].x+1 < robotPos.x)
                {
                    console.log("UP");
                    mRobot.look(MOVE.UP, mMap, mScreen);
                    i++;
                    return;
                }
                

      
                if (currentNode[i].y+1 < robotPos.y)
                {
                    console.log("LEFT");
                    mRobot.look(MOVE.LEFT, mMap, mScreen);
                    i++;
                    return;
                }


                if (currentNode[i].y+1 > robotPos.y)
                {
                    console.log("RIGHT");
                    mRobot.look(MOVE.RIGHT, mMap, mScreen);
                    i++;
                    return;
                }

                //mRobot.look(MOVE.DOWN, mMap, mScreen);

            i++;

	}
});



