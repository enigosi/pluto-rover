var Rover = (function() {

	'use strict';

	// current position
	var position;

	// helper
	var directions = ['N', 'E', 'S', 'W'];

	return  {
		land: init,
		reportPosition: reportPosition,
		getCommands: getCommands
	};


	function init(xPosition, yPosition, direction) {

		var d = directions.indexOf(direction) === -1 ? 'N' : direction;
		var x = 99 < parseInt(xPosition) || parseInt(xPosition) < 0 ? 0 : xPosition;
		var y = 99 < parseInt(yPosition) || parseInt(yPosition) < 0 ? 0 : yPosition;

		position = {
			x: x || 0,
			y: y || 0,
			d: d
		};
	}

	function reportPosition() {
		return position;
	}

	function getCommands(commands) {

		var allowedCommands = /^[FBLRfblr]+$/g;

		if (!allowedCommands.test(commands)) return false;

		commands = commands.toUpperCase();

		Array.prototype.map.call(commands, processCommand);
	}

	function processCommand(command) {

		if (command == 'F' || command == 'B') {
			move(command);
		} else {
			rotate(command);
		}
	}

	function rotate(command) {

		var direction = directions.indexOf(position.d);

		direction += command === 'L' ? -1 : 1;

		direction = (direction + 4) % 4;

		position.d = directions[direction];

	}

	function move(command) {

		var axis = ['N', 'S'].indexOf(position.d) === -1 ? 'x' : 'y';

		var newPosition = position[axis];

		newPosition += (command === 'F') ? 1 : -1;

		newPosition = (newPosition + 100) % 100;

		position[axis] = newPosition;

	}

})();