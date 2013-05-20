
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

        lastPos = mRobot.getPos();
        valor = mMap.getMapPosition(retMap, lastPos.x-1, lastPos.y-1);
        console.log("Last:",valor);

        mMap.setMapPosition(lastPos.x-1, lastPos.y-1, 0);
        

        mRobot.walk(e.which);
        
        currentPos = mRobot.getPos();

        valor = mMap.getMapPosition(retMap, currentPos.x-1, currentPos.y-1);
        console.log("Current:",valor);
        
        if (valor == 1)
        {
          mRobot.setPos(lastPos.x, lastPos.y);

        }

        else if (valor == 2 || valor == 3 )
        {
          console.log("--> Coração <---");

          retMap = mMap.setMapPosition(currentPos.x-1, currentPos.y-1, mRobot.id);

          mScreen.clean("#mapa");

          retMap = mMap.getMap();

          mMap.renderingMap("#mapa", retMap);

        }

        else {

          retMap = mMap.setMapPosition(currentPos.x-1, currentPos.y-1, mRobot.id);

          mScreen.clean("#mapa");

          retMap = mMap.getMap();

          mMap.renderingMap("#mapa", retMap);
        }

		});

	}
);


$('#stopGame').click ( function()
  {
   
   location.reload();

  }
);




