describe('Pluto Rover', function() {

	beforeEach(function() {
		Rover.init();
	})

	describe('Rover initialize in the correct way', function() {

		it("it should start from default starting point when position not assigned", function() {

			var position = Rover.reportPosition();

			expect(position.x).toBe(0);
			expect(position.y).toBe(0);
			expect(position.d).toBe('N');

		});

		it("it should be able to start from any position", function() {

			Rover.land(101, 99, 'S')
			var position = Rover.reportPosition();

			expect(position.x).toBe(101);
			expect(position.y).toBe(99);
			expect(position.d).toBe('S');

		});

	})



})