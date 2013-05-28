$('#newGameIA').click ( function()
{

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();

    // Limpa a tela //
    mScreen.clean();

    // Recupera mapa estatico // 
    retMap = mMap.staticMap();

    do {
        // testa se o mapa é valido //
        testResult = mMap.testMap();

    }while (testResult != STATUS.SUCCESS);

    // Renderiza Mapa //
    mMap.renderingMap(retMap);

    
    // set final position //
   // end = cGraph.nodes[endPos.x][endPos.y];

    // search path //
    //result = astar.search(cGraph.nodes, end);

    // Intervalo para movimentação do Personagem //
    setInterval(function() { main() }, mRobot.getSpeed() );

    function main()
    {
          //mRobot.look(MOVE.DOWN, mMap, mScreen);
    }

	
});



