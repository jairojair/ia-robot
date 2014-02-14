/*
 *
 * Helper Class
 *
 */
var Helper = function ()
{


	this.printElement = function(a)
	{
		count = 0;

	    a.forEach( function (element) 
	    {
	        console.log(count,"-",element.x, element.y);
	        count++;
	    });
	}
}