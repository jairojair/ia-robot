/*
 *
 * Node Class
 *
 */

var Node = function(id, data, up, down, left, right)
{
	
	this.nodeId = id;
	this.data = data;
	this.connections = { nUp: up, nDown: down, nLeft: left, nRight: right };

}