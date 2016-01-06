'use strict';

var Rover = (function() {

	var position;

	return  {
		land: init,
		reportPosition: reportPosition
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

})();