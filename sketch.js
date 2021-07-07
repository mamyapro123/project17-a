var tower,towerImage
var doorImage,doorsGroup,door
var climberImage,climbersGroup,climber
var ghost,ghostImage
var gamestate="play"


function preload(){
  
towerImage=loadImage("tower.png");  
doorImage=loadImage("door.png");  
doorsGroup=new Group();  
climberImage=loadImage("climber.png");
climbersGroup=new Group();  
ghostImage=loadImage("ghost-standing.png")

}

function setup(){
createCanvas(600,600);  
tower=createSprite(300,50,20,20);  
tower.addImage("tower",towerImage);
tower.velocityY=2;  

ghost=createSprite(300,50,20,20);
ghost.addImage("ghost",ghostImage);
ghost.scale=0.5;
  
}

function draw(){
background("white")
if(gamestate==="play"){
   
   
   
     
if(tower.y>400){
tower.y=50;   
}
  
if(keyDown("left")){
ghost.x=ghost.x-3;   
}
  
if(keyDown("right")){
ghost.x=ghost.x+3;   
   }
if(keyDown("space")){
ghost.velocityY=-4;   
   }  
ghost.velocityY=ghost.velocityY+0.6;

  
  
if(climbersGroup.isTouching(ghost)){
ghost.velocityY=0;   
ghost.destroy();   
gamestate="end"
  
  
   }
  
spawnDoors();  
drawSprites();
  
}
  
if(gamestate==="end"){
text("gameOver",300,300);   
   
   
   }  
  
}

function spawnDoors(){
if(frameCount%210===0){
door=createSprite(100,50,20,20);  
door.addImage(doorImage);  
door.velocityY=2;
door.x=Math.round(random(100,400))
doorsGroup.add(door);  
door.lifetime=600;

  
climber=createSprite(100,100,20,20);  
climber.addImage(climberImage);  
climber.x=door.x
climber.velocityY=2;
climber.lifetime=600;
climbersGroup.add(climber);
  
ghost.depth=door.depth  
ghost.depth=ghost.depth+1  
  
} 
}
