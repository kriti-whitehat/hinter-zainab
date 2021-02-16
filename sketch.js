var PLAY = 1;
var END = 0;
var gameState = PLAY;

var cat,catImage;
var bg,bgImage
function preload(){
catImage=loadAnimation("images/row1.png","images/row2.png","images/row3.png")
bgImage=loadImage("images/bg.jpg")

}
function setup(){
  
createCanvas(windowWidth,windowHeight);
cat=createSprite(100,height-200,100,100)
cat.addAnimation("catrunning",catImage)
cat.scale=1.5;

bg=createSprite(0,0,windowWidth,windowHeight);
bg.addImage("back",bgImage)
bg.scale=2
bg.velocityX=-3





}

function draw(){

if (gameState==PLAY){

bg.velocityX=-3;

if (keyDown("space")){
  cat.velocityY=-12;
}

  if(bg.x<0){
    bg.x=bg.width/2
    }

}
else if(gameState==END){


}
 


//cat.velocityY=cat.velocityY+0.5;


 

 
 drawSprites();
}