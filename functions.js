function createBricks() {
    brickWidth = windowWidth / brickCols
    for (let y = 0; y < brickRows; y++) {
        yOff = yLimitTop + y * brickHeight
        for (let x = 0; x < brickCols; x++) {
            xOff = 0 + x * brickWidth
            theBricks.push( new Brick(xOff,yOff,brickWidth,brickHeight,{r: 0, g: 0, b: 0}) )
        }
    }
}

function drawBricks() {
    for (let brick = 0; brick < theBricks.length; brick++) {
        theBricks[brick].drawBrick()
    }
}

function drawLimit() {
    push()
    stroke(0,255,0,255)
    line(0,yLimitTop,windowWidth,yLimitTop)
    pop()
}

function drawBar() {
    //bar move by arrow-keys
    if (keyIsDown(LEFT_ARROW) && xBar > 0) {
        xBar -= 10
    }
    if (keyIsDown(RIGHT_ARROW) && xBar < windowWidth - widthBar) {
        xBar += 10
    }
    fill(255)
    rect(xBar, windowHeight - heightBar, widthBar, heightBar)
}

function drawBall() {
}
