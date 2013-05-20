
$('#newGame').click ( function()
	{

    var mMap   = new Map();
		var mRobot = new Character();
    var mScreen = new Screen();

    mScreen.clean("#mapa");

    // Recupera mapa estatico // 
    retMap = mMap.staticMap();

    // Renderiza Mapa //
    mMap.renderingMap("#mapa", retMap);

    // Pega eventos //
		$("body").keydown(function(e) 
		{
  			//console.log(event.which);
        mRobot.walk(e.which);

		});

	}
);


$('#stopGame').click ( function()
  {
   
   location.reload();

  }
);




