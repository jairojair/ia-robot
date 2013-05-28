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

    // Intervalo para movimentação do Personagem //
    setInterval(function() { main() }, mRobot.getSpeed() );

    function main()
    {
       // mRobot.look(MOVE.DOWN, mMap, mScreen);
    }

	
});



