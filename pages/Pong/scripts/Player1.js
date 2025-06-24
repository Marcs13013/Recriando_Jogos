class Player1 {
    constructor(ctx, keyboard) {
        this.ctx = ctx
        this.keyboard = keyboard
        this.speed = 3
        this.P1_Width = 20
        this.P1_Height = 100
        this.x_P1 = 3
        this.y_P1 = (this.ctx.canvas.height / 2) - (this.P1_Height / 2)
        this.P1_Points = 0
    }

 

    manage() {
        if (this.keyboard.w) {
            this.y_P1 -= this.speed
        }
        if (this.keyboard.s) {
            this.y_P1 += this.speed
        }
        if (this.y_P1 >= this.ctx.canvas.height - this.P1_Height) {
            this.y_P1 = this.ctx.canvas.height - this.P1_Height
        }
        if (this.y_P1 <= 0) {
            this.y_P1 = 1
        }
    }


    draw() {
        this.manage()
        this.ctx.fillStyle = '#00f'
        this.ctx.fillRect(this.x_P1, this.y_P1, this.P1_Width, this.P1_Height)
    }

}