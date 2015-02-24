var keyboard = 
{
	left : false,
	right : false,
	up : false,
	down : false
};

function Player() {
	this.pos = new Victor(1.5 * config.map.tileS, 1.5 * config.map.tileS);
	this.direction = new Victor(0, 1);	

	Engine.Input.on('keydown', function(e){
		switch (e.key){
			case 'A': return keyboard.left = true;
			case 'D': return keyboard.right = true;
			case 'W': return keyboard.up = true;
			case 'S': return keyboard.down = true;
		}
	});

	Engine.Input.on('keyup', function(e){	
		switch (e.key){
			case 'A': return keyboard.left = false;
			case 'D': return keyboard.right = false;
			case 'W': return keyboard.up = false;
			case 'S': return keyboard.down = false;
		}
	});

	var self = this;
	this.timer = new Engine.Timer({
		type: Engine.Timer.VSYNC,
		duration: Infinity,
		on: {
			step: self.onStep.bind(this)
		}
	});
	this.timer.play();
}

Player.prototype = Object.create(Engine.Model.prototype);
Player.prototype.contructor = Player;

Player.prototype.onStep = function() {
	var newPos = new Victor(this.pos.x, this.pos.y);
	
	this.direction.normalize();

	if(keyboard.left)
		this.direction.rotate(-config.player.rotSpeed);
	if(keyboard.right)
		this.direction.rotate(config.player.rotSpeed);

	this.direction.multByScalar(config.player.movSpeed);

	if(keyboard.up)
		newPos.add(this.direction);		
	if(keyboard.down)
		newPos.subtract(this.direction);					

	newPos.x = Math.max(0, Math.min(game.level.length * config.map.tileS, newPos.x));
	newPos.y = Math.max(0, Math.min(game.level[0].length * config.map.tileS, newPos.y));

	var levelW = config.map.tileS * game.level.length;
	var levelH = config.map.tileS * game.level[0].length;	

	var tileOnMapX = Math.floor(newPos.x / (levelW) * game.level.length);
	var tileOnMapY = Math.floor(newPos.y / (levelH) * game.level[0].length);
	
	if(tileOnMapX <= 0 || tileOnMapX > game.level.length ||
	   tileOnMapY <= 0 || tileOnMapY > game.level.length ||	   
		(game.level[tileOnMapX][tileOnMapY] != null && 
		 (game.level[tileOnMapX][tileOnMapY][0] != 255 &&
		  game.level[tileOnMapX][tileOnMapY][1] != 255 &&
		  game.level[tileOnMapX][tileOnMapY][2] != 255))
	   )
		newPos.copy(this.pos);			
	else
		this.pos.copy(newPos);	

	/*game.playerMinimap.x = toMinimapX(this.pos.x);
	game.playerMinimap.y = toMinimapY(this.pos.y);

	game.playerDirection.x = game.playerMinimap.x + 15 ;
	game.playerDirection.y = game.playerMinimap.y;
	game.playerDirection.rotation = -this.direction.angle();*/

};