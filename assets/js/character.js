/*
 *
 * Character Class
 *
 */

var Character = function () 
{

	this.id	= 5;
	this.energy = 50;
	this.pos = {x: 1, y: 1};



	this.getId = function ()
	{
		return this.id;
	}


	/********************
	 ***** Energy *****
	 ********************/

	// new energy //
	this.setEnergy = function (energy)
	{
		this.energy = energy;
	}

	// current energy //
	this.getEnergy = function ()
	{
		return this.energy;
	}


	/********************
	 ******* Move *******
	 ********************/

	// new position //
	this.setPos = function (newPX, newPY)
	{
		this.pos = {x: newPX, y: newPY};
	}


	// current position //
	this.getPos = function ()
	{
		return this.pos;
	}


	// think //
	this.think = function (value)
	{

		console.log("Position Value:", value);

		switch(value)
		{

			case 0:
				console.log("Grama");
				return true;
				break;

			case 1:
				console.log("Rock");
				return false;
				break;

			case 2:
				console.log("Heart-10");
				return true;
				break;

			case 3:
				console.log("Heart-5");
				return true;
				break;

			case 4:
				console.log("Victory !!!!");
				return true;
				break;
		}

	}


	// look //
	this.look = function (direction,cMap,cScreen)
	{

		switch(direction)
		{

			// UP //
			case 87:

				console.log("Look: UP");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x-1 , currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), (currentPos.x-1)-1, currentPos.y-1);

				result = this.think(value);

				return result;
				
				break;
			
			// Down //
			case 83:

				console.log("Look: Down");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x+1 , currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), (currentPos.x-1)+1, currentPos.y-1);

				result = this.think(value);

				return result;

  				break;


  			// Left //
			case 65:

				console.log("Look: Left");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x, currentPos.y-1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x-1, (currentPos.y-1)-1);

				result = this.think(value);

				return result;
  				break;


			// Right //
			case 68:

				console.log("Look: Right");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x, currentPos.y+1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x-1, (currentPos.y-1)+1);

				result = this.think(value);

				return result;
  				break;


		}
		return true;
	}


	// Walk //
	this.walk = function (direction)
	{

		switch(direction)
		{
			

			// UP //
			case 87:

				console.log("Move: Up");

				P = this.getPos();

				if (P.x > 1)
				{
					this.setPos(P.x-1 , P.y);
					console.log("Current Position:",P.x-1, P.y);
					this.losesEnergy();
				}
				
				break;

			
			// Down //
			case 83:

				console.log("Move: Down");

				P = this.getPos();

				if (P.x < 10)
				{
					this.setPos(P.x+1 , P.y);
					console.log("Current Position:",P.x+1, P.y);
					this.losesEnergy();
				}

  				break;
			

			// Left //
			case 65:

				console.log("Move: Left");

				P = this.getPos();

				if (P.y > 1)
				{
					this.setPos(P.x , P.y-1);
					console.log("Current Position:", P.x, P.y-1);
					this.losesEnergy();
				}

  				break;


			// Right //
			case 68:

				console.log("Move: Right");

				P = this.getPos();

				if (P.y < 10)
				{
					this.setPos(P.x , P.y+1);
					console.log("Current Position:",P.x, P.y+1);
					this.losesEnergy();
				}				
  				break;


  			// No direction //
			default:
				console.log ("No direction, w: UP / s: Down / a: Left / d: Right ");

		}
	}


	// loses Energy //
	this.losesEnergy = function ()
	{
		energy = this.getEnergy();
		this.setEnergy(energy - 1);
		console.log("Energy:",energy - 1);

		if (this.getEnergy() < 1)
			this.die();
	}


	// die //
	this.die = function ()
	{
		console.log("Robot Die");
	}

}



