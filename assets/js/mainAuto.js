$('#newGameIA').click ( function()
{

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();

    // Limpa a tela //
    mScreen.clean();

    // Recupera mapa estatico // 
    retMap = mMap.staticMap();

    // Recupera a posição onde está a chave para testar se mapa é valido //
    endPos = mMap.getMapValue(retMap, OBJECT.KEY);

    // Cria o Grafo //
    mGraph = new Graph(retMap);

    var end = mGraph.nodes[endPos.x][endPos.y];

    var result = astar.search(mGraph.nodes, end);

    for (var i = 0; i < result.length; i++) 
    {
        console.log(result[i].pos.x+1,result[i].pos.y+1);
    };


    // Renderiza Mapa //
    mMap.renderingMap(retMap);

    // Intervalo para movimentação do Personagem //
    setInterval(function() { main() }, mRobot.getSpeed() );

    function main()
    {
            result = mRobot.look(MOVE.DOWN, mMap, mScreen);
    }

	
});



