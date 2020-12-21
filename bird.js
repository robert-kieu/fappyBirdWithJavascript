var bird = function(game) {
	this.game = game; this.images = []; this.img1Loaded = false; this.img2Loaded = false;
	this.img3Loaded = false; this.currentImage = null; this.currentFrame = 0; this.currentImageIndex = 0; this.y = 0;
	this.x = 70; this.speedY = 0; this.acceleration = 0.8; this.direction = 'down'; var self = this;
	this.init = function(){
		this.loadImage();
	}
	this.loadImage = function(){
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		img1.onload = function(){
			self.img1Loaded = true;
			self.currentImage = img1;
			self.images.push(img1);
		}
		img2.onload = function(){
			self.img2Loaded = true;
			self.currentImage = img2;
			self.images.push(img2);
		}
		img3.onload = function(){
			self.img3Loaded = true;
			self.currentImage = img3;
			self.images.push(img3);
		}
		//load all image
		img1.src = 'src/bluebird-midflap.png'; img2.src = 'src/bluebird-upflap.png'; img3.src = 'src/bluebird-downflap.png';
		this.images.push(img1); this.images.push(img2); this.images.push(img3);
	}

	this.update = function(){
		if(!self.img1Loaded || !self.img2Loaded || !self.img3Loaded) return;
		self.currentFrame++;
		if(self.currentFrame % 3 == 0) self.changeImage();
		//forget all stuff above
		if(this.y <= 260){
			if(this.direction == 'down'){ this.speedY += this.acceleration; this.y += this.speedY; }
			else{ this.speedY -= this.acceleration; }
			this.y += this.speedY;
		}
		if(this.y > 260) this.y = 260;
		// check gameover
		if(this.y == 260) this.game.gameOver = true;
		//check hit
		this.checkHitPipe();
		}
		this.checkHitPipe = function(){
			if(this.x + 34 > this.game.pipe.x && this.x < this.game.pipe.x + 52 && (this.y < this.game.pipe.y + 35 || this.y + 24 > this.game.pipe.y + 130)) 
				this.game.gameOver = true;

		this.flap = function(){
			if(this.game.gameOver) return;
			this.speedY = -5;
		}
		this.changeImage = function(){
			if(this.game.gameOver) return;
			if(this.currentImageIndex == 2) this.currentImageIndex = 0;
			else this.currentImageIndex++;
			this.currentImage = this.images[this.currentImageIndex];
		}
	}
	this.draw = function(){
		if(self.img1Loaded && self.img2Loaded && self.img3Loaded){
			self.game.context.drawImage(self.currentImage, this.x, this.y);
		}
	}
}