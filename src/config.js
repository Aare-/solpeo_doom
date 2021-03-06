var config = {

	scene: {
		width: 900,
		height: 600,
		slice_width: 10
	},

	// size of a viewport
	viewport: {
		// width of a viewport in pixels
		width: 900,
		// height of a viewport in pixels
		height: 600,
		// background color
		background: 'black'
	},

	// tile configuration
	tile: {
		width: 760,
		height: 760
	}, 			

	player: {
		movSpeed: 4,
		rotSpeed: 0.05,
		planeX: 0,
		planeY: 0.66,
		FOV: 70,
		far: 250,
		lightDistance: 300
	},

	minimap: {
		tileS: 10,
		playerS: 4,		
		left: 250,
		top: 100
	},

	map: {
		tileS: 40
	}

};