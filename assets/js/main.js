
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
        mMap.renderingCell(lastPos);

        // look //
        result = mRobot.look(e.which, mMap, mScreen);

        if (result == true)
        {

        mRobot.walk(e.which);

        currentPos = mRobot.getPos();

        retMap = mMap.setMapPosition(currentPos.x-1, currentPos.y-1, mRobot.getId() );

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




