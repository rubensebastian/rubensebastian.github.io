let circleHeight = 750
let circleHorizontal = 150
let lineHeights = []

function platformPosition() {
    let height = 650
}

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100)
    background(75)
    platformPosition()
}

function draw() {
    background(75)
    circle(circleHorizontal, circleHeight, 20)
    line(0, 760, windowWidth - 100, 760)

    if (keyIsDown(65) && circleHorizontal - 10 > 0) {//press "a" to go left
        circleHorizontal = circleHorizontal - 3
    }
    if (keyIsDown(68) && circleHorizontal + 10 < windowWidth - 100) {//press "d" to go right
        circleHorizontal = circleHorizontal + 3
    }
}

//how to stop if lands on a platform
let currentlyJumping = false

function motionOfArc() {
    let counter = 0
    let motion = setInterval(() => {
        if (counter > 240) {
            clearInterval(motion)
            currentlyJumping = false
            return
        }
        circleHeight = Math.pow(counter / 10 - 12, 2) - 144 + 750
        counter++
    }, 1)
}

function keyPressed() {
    if (keyCode === 32) {
        if (currentlyJumping == true) return

        stepCounter = 0
        currentlyJumping = true
        motionOfArc()
    }
}