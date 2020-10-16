var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
 thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,52);

 bullet = createSprite(50, 200, 50, 50);
 bullet.velocityX= speed;
 bullet.shapeColor = "violet";

 wall = createSprite(1500, 200,thickness,height/2);
 wall.shapeColor= color (80,80,80)
 
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation = 0.5* weight*speed *speed/(thickness *thickness *thickness); 
      
      if(deformation>10){
      wall.shapeColor= "pink";
    }
    if(deformation<10 ){
      wall.shapeColor="cyan";
    }
  }
  drawSprites();
}
function hasCollided (bullet,wall)
{
  bulletRightEdge= bullet.x +bullet.width;
  wallLeftEdge =wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

