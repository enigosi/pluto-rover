describe('Pluto Rover', function() {

	beforeEach(function() {
		Rover.land();
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

	describe('Rover can rotate', function() {

		it('it should be able to rotate', function() {

			Rover.getCommands('R');
			var position = Rover.reportPosition();

			expect(position.d).toBe('E');

		})

		it('it should be able to make full rotation', function() {

			Rover.getCommands('RRRR');
			var position = Rover.reportPosition();

			expect(position.d).toBe('N');

		})

		it('it should be able to make full rotation in both directions', function() {

			Rover.getCommands('LLLL');
			var position = Rover.reportPosition();

			expect(position.d).toBe('N');

		})

		it('it should be able to make crazy spins', function() {

			Rover.getCommands('LLRLRRRRLRLRLLRLLRLRRRRLRLRLLR');
			var position = Rover.reportPosition();

			expect(position.d).toBe('S');

		})

	});


	describe('Rover can make basic moves', function() {

		it('it should be able to move forward facing N', function() {

			Rover.getCommands('F');
			var position = Rover.reportPosition();

			expect(position.y).toBe(1);
			expect(position.x).toBe(0);

		})
		it('it should be able to move backward facing N', function() {

			Rover.getCommands('B');
			var position = Rover.reportPosition();

			expect(position.y).toBe(-1);
			expect(position.x).toBe(0);

		})


		it('it should be able to move forward facing E', function() {

			Rover.getCommands('RF');
			var position = Rover.reportPosition();

			expect(position.y).toBe(0);
			expect(position.x).toBe(1);

		})
		it('it should be able to move backward facing E', function() {

			Rover.getCommands('RB');
			var position = Rover.reportPosition();

			expect(position.y).toBe(0);
			expect(position.x).toBe(-1);

		})


		it('it should be able to move forward facing S', function() {

			Rover.getCommands('LLF');
			var position = Rover.reportPosition();

			expect(position.y).toBe(1);
			expect(position.x).toBe(0);

		})
		it('it should be able to move backward facing S', function() {

			Rover.getCommands('RRB');
			var position = Rover.reportPosition();

			expect(position.y).toBe(-1);
			expect(position.x).toBe(0);

		})


		it('it should be able to move backward facing W', function() {

			Rover.getCommands('LB');
			var position = Rover.reportPosition();

			expect(position.y).toBe(0);
			expect(position.x).toBe(-1);

		})
		it('it should be able to move forward facing W', function() {

			Rover.getCommands('LF');
			var position = Rover.reportPosition();

			expect(position.y).toBe(0);
			expect(position.x).toBe(1);

		})


	});

})