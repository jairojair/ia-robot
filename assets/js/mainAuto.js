$('#newGameIA').click ( function()
{

    var caminhoReal = [];

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();
    var mSearch = new Search();
    var mHelper = new Helper();


    mScreen.clean();
    mMap.staticMap();


    do {

        // Inserir metodo para gerar mapa dinamico aqui //
        testResult = mMap.testMap();

    }while (testResult != STATUS.SUCCESS);

    // renderiza o mapa
    mMap.renderingMap(mMap.getMap());

    // cria o grafo //
    mGraph = new Graph(mMap.getMap());

    // Caminho encontrado pela busca //
    caminho = mSearch.Astar(mGraph.nodes,null,null,null,null,true);

    // Imprime o caminho //
    //mHelper.printElement(caminho);
    console.log(caminho.length);
    

    for (var i = 0; i < caminho.length; i++) 
    {
        prox = i+1;

        //console.log(prox);

        if (prox < caminho.length)
        {

            startPosx = caminho[i].x; 
            startPosy = caminho[i].y;

            endPosx = (caminho[prox].x);
            endPosy = (caminho[prox].y);

            result = mSearch.Astar(mGraph.nodes, startPosx, startPosy, endPosx, endPosy);

            result.forEach( function (obj) 
            {
                caminhoReal.push(obj);
            });
        }
    }

    //mHelper.printElement(caminhoReal);
    console.log(caminhoReal.length);

    mRobot.pathReal(caminhoReal,mRobot, mMap, mScreen);

});



