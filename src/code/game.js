
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

function pow2(val) {
	return val * val;
}

Game.prototype.cast = function(pos, direction, rayNum, deltaAngle) {	
	var dAng = direction.angle() % (Math.PI * 2);	
	var self = this;
	if(dAng < 0) dAng += Math.PI * 2;				

	var yFacingUp = dAng > Math.PI && dAng < Math.PI * 2;		
	var xFacingLeft = dAng > Math.PI * 0.5 && dAng < Math.PI * 1.5;
	var angSin = Math.sin(dAng), angCos = Math.cos(dAng);
	var addY = 0;
	var addX = 0;

	var isWall = function(xC, yC) {	
		var xC = Math.floor(xC / config.map.tileS) + addX;		
		var yC = Math.floor(yC / config.map.tileS) + addY;		
				
		if(yC < 0 || yC >= self.level.length || xC < 0 || xC >= self.level.length)
			return true;		
		return self.level[xC][yC] != 1;
	};

	var Ay = yFacingUp ?  Math.floor(pos.y) : Math.ceil(pos.y);							 
	var Ax = pos.x + (Ay - pos.y) * (angCos / angSin);				
	var Ya = yFacingUp ? -config.map.tileS : config.map.tileS;		
	var Xa = Ya * (angCos / angSin);			
	
	var Bx = xFacingLeft ? Math.floor(pos.x) : Math.ceil(pos.x);		
	var By = pos.y + (Bx - pos.x) * (angSin / angCos);		
	var Xb = xFacingLeft ? -config.map.tileS : config.map.tileS;	
	var Yb = Xb * (angSin / angCos);	
			
	var lenX = 0, lenY = 0;	

	if(yFacingUp)
		addY = -1;
	do {			
		if(isWall(Ax, Ay)) {
			lenX = Math.sqrt(pow2(Ax - pos.x) + pow2(Ay - pos.y));						 			
			break;
		} else { 
			Ax += Xa;
			Ay += Ya;				
		}		
	} while(true);

	addY = 0;
	if(xFacingLeft)
		addX = -1;
	do {		
		if(isWall(Bx, By))  {
			lenY = Math.sqrt(pow2(Bx - pos.x) + pow2(By - pos.y));
			break;						 			
		} else {
			Bx += Xb;
			By += Yb;	
		}		
	} while(true);
	

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