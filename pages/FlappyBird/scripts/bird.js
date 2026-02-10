class Bird {
    constructor(ctx){
        this.ctx = ctx
        this.numBirdSprite = 0
        this.tamBirdSprite = 28
        this.posXBirdSprite = this.numBirdSprite * this.tamBirdSprite
        this.birdSprite = new Image()
        this.birdSprite.src = 'assets/flappy_bird_sprites.png'
        this.loadImage = false
        this.birdSprite.addEventListener('load', () => {
            this.loadImage = true
        })
        this.contador = 0
        this.posX = this.ctx.canvas.width / 7
        this.posY = this.ctx.canvas.height / 2.3
    }

    manage(){
        this.contador += 1;
        if (this.contador >= 10) {
            this.numBirdSprite = (this.numBirdSprite + 1) % 3
            this.contador = 0
        }
    }

    draw() {
        this.posXBirdSprite = this.numBirdSprite * this.tamBirdSprite
        if (this.loadImage == true) {
            this.ctx.drawImage(this.birdSprite, this.posXBirdSprite, 490, 20, 20, this.posX, this.posY, 70, 70)
        }
        
    }
}

