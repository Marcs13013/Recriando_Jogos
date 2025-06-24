class Ball {
    constructor(ctx, player1, player2) {
        this.ctx = ctx
        this.player1 = player1
        this.player2 = player2
        this.speed = 3
        this.ballWidth = 20
        this.ballHeight = 20
        this.moveX = 0
        this.moveY = 0
        this.x = (this.ctx.canvas.width / 2) - (this.ballWidth / 2)
        this.y = (this.ctx.canvas.height / 2) - (this.ballHeight / 2)
        this.moving = false
    }

    restart() {
        this.x = (this.ctx.canvas.width / 2) - (this.ballWidth / 2)
        this.y = (this.ctx.canvas.height / 2) - (this.ballHeight / 2)
        this.moving = false
        this.speed = 3
        this.moveX = 0
        this.moveY = 0
    }

    start() {
        this.moving = true
        this.moveX = -1
        this.moveY = (Math.random() * 10 > 5 ? -1 : 1)

    }

    manage() {
        if (this.moving) {
            this.x += (this.moveX * this.speed)
            this.y += (this.moveY * this.speed)
            if (this.x >= this.ctx.canvas.width - this.ballWidth) {
                this.restart()
                this.player1.P1_Points+=1
            }
            if (this.x <= 0) {
                this.restart()
                this.player2.P2_Points+=1
            }
            if (this.y >= this.ctx.canvas.height - this.ballHeight) {
                this.moveY = -1
            }
            if (this.y <= 0) {
                this.moveY = 1
            }

            if (
                this.x <= this.player1.x_P1 + this.player1.P1_Width && this.x + this.ballWidth >= this.player1.x_P1 &&
                this.y + this.ballHeight >= this.player1.y_P1 && this.y <= this.player1.y_P1 + this.player1.P1_Height
            ) {
                this.moveX = 1
            }

            if (
                this.x + this.ballWidth >= this.player2.x_P2 && this.x <= this.player2.x_P2 + this.player2.P2_Width &&
                this.y + this.ballHeight >= this.player2.y_P2 && this.y <= this.player2.y_P2 + this.player2.P2_Height
            ) {
                this.moveX = -1
            }
        }
    }


    draw() {
        this.manage()
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight)
    }

}