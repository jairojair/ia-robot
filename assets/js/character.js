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

		var status;

		console.log("Position Value:", value);

		switch(value)
		{

			case OBJECT.GRASS:
				console.log("Grass");
				status = true;
				break;

			case OBJECT.ROCK:
				console.log("Rock");
				status = false;
				break;

			case OBJECT.HEART10:
				console.log("Heart10");
				this.sumEnergy(10);
				status = true;
				break;

			case OBJECT.HEART5:
				console.log("Heart5");
				this.sumEnergy(5);
				status = true;
				break;

			case OBJECT.KEY:
				console.log("Victory !!!!");
				status = true;
				break;

			default:

		}

		return status;

	}


	// look //
	this.look = function (direction,cMap,cScreen)
	{

		switch(direction)
		{

			// UP //
			case MOVE.UP:

				console.log("Look: UP");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x-1 , currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), (currentPos.x-1)-1, currentPos.y-1);

				result = this.think(value);
				
				break;
			
			// Down //
			case MOVE.DOWN:

				console.log("Look: Down");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x+1 , currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), (currentPos.x-1)+1, currentPos.y-1);

				result = this.think(value);


  				break;


  			// Left //
			case MOVE.LEFT:

				console.log("Look: Left");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x, currentPos.y-1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x-1, (currentPos.y-1)-1);

				result = this.think(value);

  				break;


			// Right //
			case MOVE.RIGHT:

				console.log("Look: Right");

				currentPos = this.getPos();

				console.log("Look Position:", currentPos.x, currentPos.y+1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x-1, (currentPos.y-1)+1);

				result = this.think(value);

  				break;


		}
						
		return result;
	}


	// Walk //
	this.walk = function (direction)
	{

		switch(direction)
		{
			

			// UP //
			case MOVE.UP:

				console.log("Move: Up");

				P = this.getPos();

				if (P.x > 1)
				{
					this.setPos(P.x-1 , P.y);
					console.log("Current Position:",P.x-1, P.y);
					this.subEnergy();
				}
				
				break;

			
			// Down //
			case MOVE.DOWN:

				console.log("Move: Down");

				P = this.getPos();

				if (P.x < 10)
				{
					this.setPos(P.x+1 , P.y);
					console.log("Current Position:",P.x+1, P.y);
					this.subEnergy();
				}

  				break;
			

			// Left //
			case MOVE.LEFT:

				console.log("Move: Left");

				P = this.getPos();

				if (P.y > 1)
				{
					this.setPos(P.x , P.y-1);
					console.log("Current Position:", P.x, P.y-1);
					this.subEnergy();
				}

  				break;


			// Right //
			case MOVE.RIGHT:

				console.log("Move: Right");

				P = this.getPos();

				if (P.y < 10)
				{
					this.setPos(P.x , P.y+1);
					console.log("Current Position:",P.x, P.y+1);
					this.subEnergy();
				}				
  				break;


  			// No direction //
			default:
				console.log ("No direction, w: UP / s: Down / a: Left / d: Right ");

		}
	}


	// substration Energy //
	this.subEnergy = function ()
	{
		energy = this.getEnergy();
		this.setEnergy(energy - 1);
		console.log("Energy:",energy - 1);

		if (this.getEnergy() < 1)
			this.die();
	}


	// sum energy //
	this.sumEnergy = function (energyPlus)
	{
		energy = this.getEnergy();
		this.setEnergy(energy + energyPlus);
		console.log("new Energy:", energy + energyPlus);
	}


	// die //
	this.die = function ()
	{
		console.log("Robot Die");
	}

}



