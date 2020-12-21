var base = function(game) {
	this.game = game; this.image = null; this.load = false; this.x = 0; var self = this;
	this.init = function(){
		this.loadImage();
	}
	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.load = true;
		}
		this.image.src = 'src/base.png';
	}
	this.update = function(){
		if(this.game.gameOver) return;
		this.x -= 2;
		if(this.x == -300 ) this.x += 300;
	}
	this.draw = function(){
		if(self.loaded == false) return;
		this.game.context.drawImage(this.image, this.x, this.game.height - 112);
		this.game.context.drawImage(this.image, this.x + 300, this.game.height - 112);
	}
}