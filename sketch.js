
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car =createSprite(50,200,50,50);
  car.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor(80,80,80);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
}

function draw() {
  background("black");  
  
  car.velocityX=speed;
  console.log(wall.x-car.x);


  bullet.collide(wall);


  function hasCollieded(bullet,wall){

    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true 
    }
    return false;
  }


  if(hasCollieded(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
  if(damage>10)
 {
  wall.shapeColor=(255,0,0);

}

if(damage<10)
{
  wall.shapeColor=(0,255,0);
}
  // if((wall.x-car.x)<(car.width + wall.width)/2){
  //   car.velocityX=0;
  //    var deformation=(0.5*weight*speed*speed)/22500;
  //   if(deformation<100){
  //     car.shapeColor=color(0,255,0);
  //   }
  //   if(deformation>100 && deformation <180){
  //    car.shapeColor=color(230,230,0);
  //  }
  //   if(deformation>180){
  //    car.shapeColor=color(255,0,0);
  //  }
  // }

  drawSprites();
}

