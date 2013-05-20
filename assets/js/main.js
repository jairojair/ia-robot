
$('#newGame').click ( function()
	{

    var mMap    = new Map();
		var mRobot  = new Character();
    var mScreen = new Screen();

    mScreen.clean();

    // Recupera mapa estatico // 
    retMap = mMap.staticMap();

    // Renderiza Mapa //
    mMap.renderingMap(retMap);

 
    // Pega eventos //
		$("body").keydown(function(e) 
		{

        lastPos = mRobot.getPos();
        valor = mMap.getMapPosition(retMap, lastPos.x-1, lastPos.y-1);
        console.log("Last:",valor);

        mMap.setMapPosition(lastPos.x-1, lastPos.y-1, 0);
        

        // vai andar //
        mRobot.walk(e.which);
        // já andou //
        
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

          retMap = mMap.setMapPosition(currentPos.x-1, currentPos.y-1, mRobot.getId() );

          mScreen.clean();

          retMap = mMap.getMap();

          mMap.renderingMap(retMap);

        }

        else {

          retMap = mMap.setMapPosition(currentPos.x-1, currentPos.y-1, mRobot.id);

          mScreen.clean();

          retMap = mMap.getMap();

          mMap.renderingMap(retMap);
        }

		});

	}
);


$('#stopGame').click ( function()
  {
   
   location.reload();

  }
);




