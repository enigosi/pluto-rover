'use strict';

var Rover = (function() {

	var position;

	return  {
		land: init,
		reportPosition: reportPosition,
		getCommands: getCommands
	}


	function init(x, y, direction) {

		position = {
			x: x || 0,
			y: y || 0,
			d: direction || 'N'
		}
	}

	function reportPosition() {
		return position;
	}

	function getCommands(commands) {
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

		var directions = ['N', 'E', 'S', 'W'];

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