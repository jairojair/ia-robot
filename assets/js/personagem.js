
/*
	Character Class
*/

var Character = function(name,energy) 
{

	this.name	= name;
	this.energy = energy;


	this.getName = function()
	{
		return this.name.toString();
	}

	this.getEnergy = function()
	{
		return this.energy;
	}
}