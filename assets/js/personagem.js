
// Classe Personagem //
var Personagem = function(nome,energia) 
{


	// setters
	this.setNome = function(nome)
	{
		this.nome = nome;
	}

	this.setEnergia = function(energia)
	{
		this.energia = energia;
	}


	// getters
	this.getNome = function()
	{
		return this.nome.toString();
	}

	this.getEnergia = function()
	{
		return this.energia;
	}


	// Metodos //
	this.andar = function()
	{


	}

}