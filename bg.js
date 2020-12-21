var bg = function(game) {
	this.game = game; this.image = null; this.load = false; this.x = 0; this.gameOver = false; var self = this;
	this.init = function(){
		this.loadImage();
	}
	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.load = true;
		}
		this.image.src = 'src/background.png';
	}
	this.update = function(){
		if(this.game.gameOver) return;
		this.x--;
		if(this.x == -288 ) this.x += 288;
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image, this.x, 0);
		this.game.context.drawImage(this.image, this.x + 288, 0);
	}
}