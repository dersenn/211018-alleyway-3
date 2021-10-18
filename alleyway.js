// TO DO
// — Account for screensize (speed mostly)
// — Implement side collision on bricks
// — Debug collisions in general ;-)
// — Bug on right side of paddle...
// — Add some winning mechanic when all bricks are cleared.

//game on?
let gameOn = true

//bar parameters
let heightBar = 10
let widthBar = 100
let xBar

//initialize score
let score = 0

//level up?
let level = 1

//yLimit for increased difficulty (limit playground)
let yLimitTop = 0
let yLimitBottom

//bricks
let brickRows = 5
let brickCols = 9
let theBricks = []
let brickHeight = 10
let brickMax = brickRows * brickHeight

//ball parameters
let xBall
let yBall = brickMax + 20
let sizeBall = 30
let speedX = 2
let speedY = 7

let theBall

function setup() {
    createCanvas(windowWidth, windowHeight);

    yLimitBottom = windowHeight - heightBar

    createBricks()

    //ball start
    xBall = random(sizeBall/2,windowWidth-sizeBall/2)
    theBall = new Ball(xBall,yBall,sizeBall,speedX,speedY)

    // bar start
    xBar = windowWidth/2 - widthBar/2
}

function draw() {
    background(0,0,0,50);

    //make Bar
    drawBar()

    //draw Ball
    theBall.checkPosition()
    theBall.moveBall()
    theBall.drawBall()

    //draw Bricks
    drawBricks()

    //draw Limit
    drawLimit()

    //temporary placement of score.
    push()
    textSize(16)
    textAlign(LEFT)
    text('Level: '+level, 5, windowHeight - 120)
    //display score
    textSize(60)
    textAlign(CENTER)
    text(score, windowWidth/2, windowHeight - 120)
    //display game over
    if (!gameOn) {
        text('GAME OVER', windowWidth/2, windowHeight - 60)
    }
    pop()
}