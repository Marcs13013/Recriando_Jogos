class Player2 {
    constructor(ctx, keyboard) {
        this.ctx = ctx
        this.keyboard = keyboard
        this.speed = 3
        this.P2_Width = 20
        this.P2_Height = 100
        this.x_P2 = (this.ctx.canvas.width - this.P2_Width) - 3
        this.y_P2 = (this.ctx.canvas.height / 2) - (this.P2_Height / 2)
        this.P2_Points = 0
    }


    manage() {
        if (this.keyboard.up) {
            this.y_P2 -= this.speed
        }
        if (this.keyboard.down) {
            this.y_P2 += this.speed
        }
        if (this.y_P2 >= this.ctx.canvas.height - this.P2_Height) {
            this.y_P2 = this.ctx.canvas.height - this.P2_Height
        }
        if (this.y_P2 <= 0) {
            this.y_P2 = 1
        }
    }


    draw() {
        this.manage()
        this.ctx.fillStyle = '#f00'
        this.ctx.fillRect(this.x_P2, this.y_P2, this.P2_Width, this.P2_Height)
    }

}