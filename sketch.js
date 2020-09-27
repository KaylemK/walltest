var bullet,wall;
var thickness,weight,speed;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,30,150);

thickness=random(22,100);
speed=random(223,331);
weight=random(30,72);
}

function draw() {
  background(0,0,0);  
  if(keyWentDown("space")){
bullet.velocityX=speed;
  }

  if(bullet.x>1100){
    

var damage=0.5 * weight * weight * speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor=color(255,0,0);

}
if(damage<10){
  wall.shapeColor="green";
}
  }
  bullet.collide(wall);
  drawSprites();
}