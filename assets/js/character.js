/*
 *
 * Character Class
 *
 */

var Character = function () 
{

	this.id 		= OBJECT.CHAR;
	this.energy 	= 50;
	this.pos 		= {x: 0, y: 0};
	this.lastPos 	= {x: 0, y: 0};
	this.die 		= false;
	this.speed 		= 200;


	this.getId = function ()
	{
		return this.id;
	}

	// get speed //
	this.getSpeed = function ()
	{
		return this.speed;
	}

	// new speed //
	this.setSpeed = function (newSpeed)
	{
		this.speed = newSpeed;
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


	// last position //
	this.setLastPos = function (newPX, newPY)
	{
		this.lastPos = {x: newPX, y: newPY};
	}


	// last position //
	this.getLastPos = function ()
	{
		return this.lastPos;
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
				status = OBJECT.GRASS;
				break;

			case OBJECT.ROCK:
				console.log("Rock");
				status = OBJECT.ROCK;
				break;

			case OBJECT.HEART10:
				console.log("Heart10");
				this.sumEnergy(10);
				status = OBJECT.HEART10;
				break;

			case OBJECT.HEART5:
				console.log("Heart5");
				this.sumEnergy(5);
				status = OBJECT.HEART5;
				break;

			case OBJECT.KEY:
				console.log("Victory !!!!");
				status = OBJECT.KEY;
				break;

			default:
				console.log("Wall");
				status = OBJECT.WALL;

		}

		return status;

	}


	// look //
	this.look = function (direction, cMap, cScreen)
	{

		switch(direction)
		{

			// UP //
			case MOVE.UP:

				currentPos = this.getPos();

				if (currentPos.x <= 0)
				{
					status = false;
					break;
				}

				console.log("Look: UP");
				console.log("Look Position:", currentPos.x-1, currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x-1, currentPos.y );

				status = this.think(value);

				if (status != OBJECT.ROCK &&  status != OBJECT.WALL)
				{
					cMap.renderingCell(currentPos);
					this.walk(MOVE.UP);
					newPos = this.getPos();
					this.refresh(newPos, cMap, cScreen);
				}
				
				break;
			
			// Down //
			case MOVE.DOWN:

				currentPos = this.getPos();

				if (currentPos.x >= 9)
				{
					status = false;
					break;
				}

				console.log("Look: Down");
				console.log("Look Position:", currentPos.x+1 , currentPos.y);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x+1, currentPos.y);
				status = this.think(value);

				if (status != OBJECT.ROCK &&  status != OBJECT.WALL)
				{
					cMap.renderingCell(currentPos);
					this.walk(MOVE.DOWN);
					newPos = this.getPos();
					this.refresh(newPos, cMap, cScreen);
				}
  				break;


  			// Left //
			case MOVE.LEFT:

				currentPos = this.getPos();

				if (currentPos.y <= 0)
				{
					status = false;
					break;
				}

				console.log("Look: Left");
				console.log("Look Position:", currentPos.x, currentPos.y-1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x, currentPos.y-1);

				status = this.think(value);

				if (status != OBJECT.ROCK &&  status != OBJECT.WALL)
				{
					cMap.renderingCell(currentPos);
					this.walk(MOVE.LEFT);
					newPos = this.getPos();
					this.refresh(newPos, cMap, cScreen);
				}

  				break;


			// Right //
			case MOVE.RIGHT:

				currentPos = this.getPos();
				
				if (currentPos.y >= 9)
				{
					status = false;
					break;
				}

				console.log("Look: Right");
				console.log("Look Position:", currentPos.x, currentPos.y+1);

				value = cMap.getMapPosition(cMap.getMap(), currentPos.x, currentPos.y+1);

				status = this.think(value);

				if (status != OBJECT.ROCK && status != OBJECT.WALL)
				{
					cMap.renderingCell(currentPos);
					this.walk(MOVE.RIGHT);
					newPos = this.getPos();
					this.refresh(newPos, cMap, cScreen);
				}

  				break;


		}
						
		return status;
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

				if (P.x > 0)
				{
					this.setLastPos(P.x,P.y);
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
					this.setLastPos(P.x, P.y);
					this.setPos(P.x+1 , P.y);
					console.log("Current Position:",P.x+1, P.y);
					this.subEnergy();
				}

  				break;
			

			// Left //
			case MOVE.LEFT:

				console.log("Move: Left");

				P = this.getPos();

				if (P.y > 0)
				{
					this.setLastPos(P.x,P.y);
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
					this.setLastPos(P.x,P.y);
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
			this.die = true;
	}


	// sum energy //
	this.sumEnergy = function (energyPlus)
	{
		energy = this.getEnergy();
		this.setEnergy(energy + energyPlus);
		console.log("new Energy:", energy + energyPlus);
	}


	// refresh //
	this.refresh = function (currentPos, cMap, cScreen)
	{
		retMap = cMap.setMapPosition(currentPos.x, currentPos.y, this.getId() );

		cScreen.clean();

		retMap = cMap.getMap();

		cMap.renderingMap(retMap);
	}

	// direction //
	this.pathReal = function (caminhoReal, cRobot, cMap, cScreen)
	{

	    loop = setInterval(function() { main() }, cRobot.getSpeed() );
	    
	    i=0;

	    function main ()
	    {

	        if (i < caminhoReal.length)
	        {

	                robotPos = cRobot.getPos();

	                console.log("Corr x:", caminhoReal[i].x, caminhoReal[i].y);
	                console.log("Robo x:", robotPos.x, robotPos.y);


	                if (caminhoReal[i].x > robotPos.x)
	                {
	                    console.log("DOWN");
	                    cRobot.look(MOVE.DOWN, cMap, cScreen);
	                    i++;
	                    return;
	                }

	                if (caminhoReal[i].x < robotPos.x)
	                {
	                    console.log("UP");
	                    cRobot.look(MOVE.UP, cMap, cScreen);
	                    i++;
	                    return;
	                }
	                

	                if (caminhoReal[i].y < robotPos.y)
	                {
	                    console.log("LEFT");
	                    cRobot.look(MOVE.LEFT, cMap, cScreen);
	                    i++;
	                    return;
	                }


	                if (caminhoReal[i].y > robotPos.y)
	                {
	                    console.log("RIGHT");
	                    cRobot.look(MOVE.RIGHT, cMap, cScreen);
	                    i++;
	                    return;
	                }

	                i++;
	        }

	        clearInterval(loop);

	    }
		
	}

}



