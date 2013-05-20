
$('#newGame').click ( function()
	{

    var map = new Map();
		var robot = new Character();

    // Recupera mapa estatico // 
    m = map.staticMap();

    // Renderiza Mapa //
    map.renderingMap("#mapa", m);

    // Pega eventos //
		$("body").keydown(function(e) 
		{
  			//console.log(event.which);
        robot.walk(e.which);

		});



	}
);


$('#stopGame').click ( function()
  {
   
   location.reload();

  }
);




