
function toMinimapLen(val) {
	return val * (config.minimap.tileS / config.map.tileS);
}
 
function toMinimapX(posX) {
	return toMinimapLen(posX) - config.viewport.width / 2 + config.minimap.left;
}

function toMinimapY(posY) {
	return toMinimapLen(posY) - config.viewport.height / 2 + config.minimap.top;
}

function Game() {							
	Engine.Node.call(this);

	this.level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]];

	var slicesNum = Math.ceil(config.scene.width / config.scene.slice_width);		
	this.slices = [];
	this.debugCP = [];
	this.delta = 0;

	for(var i =0; i<slicesNum; i++)
		this.slices.push(
			new Engine.Sprite({
				width: config.scene.slice_width,
				height: (Math.sin(3.14 * (i / slicesNum) * 4) + 1) * 100 * 0.5 + 100,
				x: config.scene.width * (-0.5) + i * config.scene.slice_width,
				y: 0,
				color: "green",
				parent : scene
			}));		

	/* DRAW MINIMAP */
	var col;
	for(var i = 0; i<this.level.length; i++) {
		for(var j = 0; j<this.level[i].length; j++) {
			switch(this.level[i][j]){
				case 0:
					col = "gray";
					break;
				case 1:
					col = "white";
					break;
			}

			new Engine.Sprite({
				width: config.minimap.tileS,
				height: config.minimap.tileS,
				x: (i + 0.5) * config.minimap.tileS - config.viewport.width / 2 + config.minimap.left,
				y: (j + 0.5) * config.minimap.tileS - config.viewport.height / 2 + config.minimap.top,
				color: col,
				parent: scene,
				opacity: 0.3
			});
		}
	}

	for(var i =0; i<slicesNum; i++)
		this.debugCP.push(
			new Engine.Sprite({
				width: 1,
				height: 1,
				x: 0,
				y: 0,
				color: "orange",
				parent : scene
			}));		

	this.playerMinimap = new Engine.Sprite({
		width: config.minimap.playerS,
		height: config.minimap.playerS,
		x: 0,
		y: 0,
		color: "red",
		parent: scene
	});

	this.playerDirection = new Engine.Sprite({
		width: 30,
		height: 1,
		x: 0,
		y: 0,
		originX: -15,
		originY: 0,		
		color: "red",
		parent: scene
	});
}

Game.prototype = Object.create(Engine.Node.prototype);
Game.prototype.contructor = Game;

Game.prototype.isWall = function(xC, yC) {
	var xC = Math.round(xC / config.map.tileS);		
	var yC = Math.floor(yC / config.map.tileS);		
			
	if(yC < 0 || yC >= this.level.length || xC < 0 || xC >= this.level.length)
		return true;		
	return this.level[xC][yC] != 1;
};

Game.prototype.cast = function(pos, direction, rayNum, deltaAngle) {					
	
	var clampedPosX = Math.floor(pos.x / config.map.tileS);
	var clampedPosY = Math.floor(pos.y / config.map.tileS);	
	var tanAngle = Math.tan(direction.angle());		

	var yFacingUp = direction.cross(new Victor(1, 0)) > 0;		
	var Ay = yFacingUp ?  clampedPosY * config.map.tileS - 1 : 
						  (clampedPosY + 1) * config.map.tileS;							 
	var Ax = pos.x + (pos.y - Ay) / tanAngle;			
	var Ya = yFacingUp ? -config.map.tileS : config.map.tileS;		
	var Xa = Ya / tanAngle;			

	var xFacingLeft = direction.cross(new Victor(0, 1)) < 0;
	var Bx = xFacingLeft ? clampedPosX * config.map.tileS - 1 : 
						   (clampedPosX + 1) * config.map.tileS;	
	var By = pos.y + (pos.x - Bx) * tanAngle;	
	var Xb = xFacingLeft ? -config.map.tileS : config.map.tileS;	
	var Yb = Xb * tanAngle;	
		
	var lenX = -1;
	var lenY = -1;	
	
	do {				
		if(this.isWall(Ax, Ay)) {
			lenX = Math.sqrt((Ax - pos.x) * (Ax - pos.x) + (Ay - pos.y) * (Ay - pos.y));						 			
		} else { 
			Ax += Xa;
			Ay += Ya;
		}		
	} while(lenX == -1);
	
	do {				
		if(this.isWall(Bx, By))  {
			lenY = Math.sqrt((Bx - pos.x) * (Bx - pos.x) + (By - pos.y) * (By - pos.y));						 			
		} else {
			Bx += Xb;
			By += Yb;
		}		
	} while(lenY == -1);

	var finLen = Math.min(lenX, lenY);	

	game.debugCP[rayNum].width = toMinimapLen(finLen);
	game.debugCP[rayNum].x = toMinimapX(pos.x) + game.debugCP[rayNum].width / 2;
	game.debugCP[rayNum].y = toMinimapY(pos.y);		
	game.debugCP[rayNum].rotation = -direction.angle();
	game.debugCP[rayNum].originX = -game.debugCP[rayNum].width / 2;

	return finLen  * Math.cos(deltaAngle);	
};

Game.prototype.onStep = function() {	
	this.delta += 0.1;
	var w = this.slices.length;
	var FOV = 60;	
	var vec = new Victor(0, 0);	

	for(var i = 0; i < w; i++) {		
		var deltaAngle = degrees2radian(FOV * (i / w - 0.5));
		vec.copy(player.direction).rotate(deltaAngle).normalize();

		var rayLen = this.cast(player.pos, vec, i, deltaAngle);
		
		this.slices[i].color = "rgb(0, "+
							   Math.floor(255 - Math.max(Math.min(rayLen, 150), 0) / 150 * 155) +
							   ", 0)";	
		this.slices[i].height = config.map.tileS / rayLen * 250;

	}
};

Game.prototype.show = function() {
	this.parent = scene;	
	
	var self = this;
	this.timer = new Engine.Timer({
		type: Engine.Timer.VSYNC,
		duration: Infinity,
		on: {
			step: self.onStep.bind(this)
		}
	});
	this.timer.play();
};

Game.prototype.hide = function() {
	this.parent = null;
	this.timer.stop();
	this.timer = null;
}