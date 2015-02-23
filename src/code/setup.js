var game;
var player;

var viewport = new Engine.Viewport('engine', config.viewport.width, config.viewport.height);

var scene = new Engine.Scene({
	color: config.viewport.background
});

var camera = new Engine.Camera({
	lookAt: scene,
	zoom: config.viewport.height / config.scene.height
});

viewport.addCamera(camera);

Engine.ready(function(){			

	player = new Player();
	game = new Game();

	game.show();	
});
