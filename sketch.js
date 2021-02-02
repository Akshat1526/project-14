var PLAY = 1
var END = 0
var gameState = 1
var swordImage
var fruit1Image, fruit2Image, fruit3Image, fruit4Image
var alien1Image,alien2Image
var gameOverImage
score = 0

function preload(){
  swordImage = loadImage("sword.png")
  fruit1Image = loadImage("fruit1.png")
  fruit2Image = loadImage("fruit2.png")
  fruit3Image = loadImage("fruit3.png")
  fruit4Image = loadImage("fruit4.png")
  alien1Image = loadImage("alien1.png")
  alien2Image = loadImage("alien2.png")
  gameOverImage = loadImage("gameover.png")
 
}


function setup(){
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale = 0.5
  fruitGroup = new Group()
  monsterGroup = new Group()
  
  
}


function draw(){
  background(220)
  if(gameState === 1){
    sword.x = World.mouseX
    sword.y = World.mouseY
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach()
      score = score + 1
    }
  }
  if(monsterGroup.isTouching(sword)){
    gameState = 0
    
  }
  if(gameState === 0){
    fruitGroup.destroyEach()
    monsterGroup.destroyEach()
    fruitGroup.setVelocityXEach = 0
    monsterGroup.setVelocityXEach = 0
    sword.x = 200
    sword.y = 200
    sword.addImage(gameOverImage)
  }
  
  fruits()
  monsters()
  
drawSprites()
  
  
}

function fruits(){
if(World.frameCount%60===0){
  fruit = createSprite(400,200,20,20)
  fruit.scale = 0.2
  r = Math.round(random(1,4))
  if (r == 1){
    fruit.addImage(fruit1Image)
  } else if(r == 2){
    fruit.addImage(fruit2Image)
  } else if(r == 3){
    fruit.addImage(fruit3Image)
  } else (fruit.addImage(fruit4Image))
  fruit.y = Math.round(random(50,340))
  fruit.velocityX = -7
  fruit.setLifetime = 100
  fruitGroup.add(fruit)
  
 }
}
function monsters(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20)
    r = Math.round(random(1,2))
    if (r==1){
      monster.addImage(alien1Image)
    } else {
      monster.addImage(alien2Image)
    }
    monster.y = Math.round(random(50,300))
    monster.velocityX = -8
    monster.setLifetime = 50
    monsterGroup.add(monster)
  }
}