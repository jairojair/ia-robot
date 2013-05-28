
$('#newGame').click ( function()
{

    var mMap    = new Map();
    var mRobot  = new Character();
    var mScreen = new Screen();

    // Limpa a tela //
    mScreen.clean();

    // Recupera mapa estatico // 
    retMap = mMap.staticMap();

    // Renderiza Mapa //
    mMap.renderingMap(retMap);

 
    // Pega eventos //
	$("body").keydown(function(e) 
	{

        // look //
        mRobot.look(e.which, mMap, mScreen);


	});

	
});


$('#stopGame').click ( function()
{
   
   location.reload();

});




