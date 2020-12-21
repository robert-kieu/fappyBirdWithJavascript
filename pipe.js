var pipe = function(game) {
	this.game = game; this.image = null; this.image2 = null; this.load = false;
	this.x = 0; this.y = 0; this. image3 = null; var self = this;
	this.init = function(){
		this.loadImage();
	}
	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.load = true;
		}
		this.image.src = 'src/pipe-green.png';

		this.image2 = new Image();
		this.image2.onload = function(){
			self.load = true;
		}
		this.image2.src = 'src/pipe-green-down.png';
	}
	this.update = function(){
		if(this.game.gameOver) return; 
		this.x -= 2;
		if(this.x == -50){
			this.x += 350;
			this.y = Math.floor(Math.random() * 170);
		}
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image2, this.x, this.y - 250);
		this.game.context.drawImage(this.image, this.x, this.y + 130);
	}
}