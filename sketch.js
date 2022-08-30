var bg, backgroundImg
var playerPt1, playerPt2, playerPt3, playerSprite

var zombieSprite, ZombieImg

var MaxhealthSprite, maxHealthImg  
var healthAtTwoSprite, twoHealthImg
var healthAtOneSprite, oneHealthImg

function preload(){
backgroundImg = loadImage("bg.jpeg")
 playerPt1 = loadImage("shooter_1.png")
 playerPt2 = loadImage("shooter_2.png")
 playerPt3 = loadImage("shooter_3.png")

ZombieImg = loadImage("zombie.png")

maxHealthImg = loadImage("heart_3.png")
twoHealthImg = loadImage("heart_2.png")
oneHealthImg = loadImage("heart_1.png")
}

function setup(){
    //creating the canvas of the screen size :D
    createCanvas(windowWidth, windowHeight)
    
    // creating the sprite for the background :DD
    bg = createSprite(displayWidth/2, displayHeight/2 + 200 )
    bg.addImage(backgroundImg)
    bg.scale = 1.5

    //creating the player sprite :DDD
    playerSprite = createSprite(400, 750, 100, 100)
    playerSprite.addImage(playerPt1)
    playerSprite.scale = 0.5
console.log(playerSprite.y)


// creating the health sprites :DDDD



}

function draw(){
 background("black")

if(keyWentDown("SPACE")){

playerSprite.addImage(playerPt3)

}

if(keyWentUp("SPACE")){
    
    playerSprite.addImage(playerPt2)
}

if(keyDown("UP_ARROW")){

    playerSprite.y = playerSprite.y - 25
    console.log(playerSprite.y)
}


if(keyDown("DOWN_ARROW")){
    playerSprite.y = playerSprite.y + 25
    }

zombieThings()

    drawSprites()
}

function zombieThings(){
if(frameCount % 60 == 0){
    zombieSprite = createSprite(displayWidth - 100, 750, 100,100)
    zombieSprite.addImage(ZombieImg)
    zombieSprite.scale = 0.2
    zombieSprite.velocityX = -10
console.log("this is the zombie"+zombieSprite.x)
}    
}