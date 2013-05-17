
/* 
  Main
*/


$( "body" ).keydown(function(event) {

  console.log( event.which );

});





$('#NovoJogo').click ( function()
	{

		var char  = new Character ("JJ",50);

		nome = char.getName();
		console.log (nome);

		energia = char.getEnergy();
		console.log (energia);


	}
)
