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

		// -1/1 +4
		direction += command === 'L' ? 3 : 5;

		direction = direction % 4;

		position.d = directions[direction];

	}

	function move(command) {

	}

})();