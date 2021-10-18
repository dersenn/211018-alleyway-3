class Brick {
    constructor(posX, posY, tW, tH, color) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.col = {r: color.r, g: color.g, b: color.b}
        this.limitX = this.x + this.w
        this.limitY = this.y + this.h
    }

    drawBrick() {
        push()
        stroke(255)
        fill(this.col.r, this.col.g, this.col.b, 255)
        rect(this.x,this.y,this.w,this.h)
        pop()
    }
}


class Ball {
    constructor(posX,posY,d,speedX,speedY) {
        this.x = posX
        this.y = posY
        this.d = d
        this.r = d/2
        this.speedX = speedX
        this.speedY = speedY
    }

    checkPosition() {
        //ball hits left/right wall
        if (this.x > windowWidth - this.r || this.x < this.r ){
            this.speedX *= -1
        }
        //ball hits top wall
        if (this.y < yLimitTop + this.r ){
            this.speedY *= -1
        }
        //ball hits brick
        for (let b = 0; b < theBricks.length; b++) {
            let curBrick = theBricks[b]
            if (this.y < curBrick.y + curBrick.h + this.r
                && this.x > curBrick.x
                && this.x < curBrick.limitX) {
                    this.speedY *= -1
                    console.log('hit a brick')
                    //remove this brick from array
                    theBricks.splice(b, 1)
            }
        }
        //ball hits the bar, yay!
        if (this.y > yLimitBottom - this.r 
            && this.x + this.r > xBar 
            && this.x + this.r < xBar + widthBar){
                this.speedY *= -1
                this.checkScore()
        }
        //fail!
        if (this.y > windowHeight - this.r){
            this.speedY = 0
            this.speedX = 0
            this.y = windowHeight - this.r
            //Game Over
            gameOn = false
        }
    }

    checkScore() {
        let yStep = 10
        //increase score and speed. but only if game is on.
        if (gameOn) {
            score ++
            //increase level after every 3 successful hits. and increase speed.
            if (score % 3 == 0) {
                // increase Level Count
                level++
                //speed acceleration
                this.speedY += this.speedY*0.1
                //make playground smaller
                yLimitTop += yStep
                //change yPos of each brick
                for (let b = 0; b < theBricks.length; b++) {
                    theBricks[b].y += yStep
                }
            }
        }
    }

    moveBall() {
        this.x += this.speedX
        this.y += this.speedY
    }

    drawBall() {
        ellipse(this.x,this.y,this.d)
    }
}