$('#newGameIA').click ( function()
{

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();
    var mSearch = new Search();


    mScreen.clean();
    mMap.staticMap();


    do {

        // Inserir metodo para gerar mapa dinamico aqui //
        testResult = mMap.testMap();

    }while (testResult != STATUS.SUCCESS);

    
    mMap.renderingMap(mMap.getMap());

    mGraph = new Graph(mMap.getMap());

    mSearch.Robot(mGraph.nodes, mRobot, mMap, mScreen);

});



