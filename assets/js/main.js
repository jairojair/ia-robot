
/* 

  // Onde Jogo acontece //

*/



$('#NovoJogo').click ( function()
	{
		var char  = new Personagem ();
		var char2 = new Personagem ();

		char.setNome("JJ");
		char.setEnergia(50);

		nome = char.getNome();
		console.log (nome);

		energia = char.getEnergia();
		console.log (energia);



		char2.setNome("Joao");
		char2.setEnergia(60);

		nome = char2.getNome();
		console.log (nome);

		energia = char2.getEnergia();
		console.log (energia);
	}
)