var car,wall,s,w,d,t;
function setup() {
  createCanvas(1600,400);
  
  s=random(223,321);
  w=random(30,52);
  t=random(22,83);
  d=0
  car=createSprite(50, 200, 70, 30);
  car.shapeColor="white";
  car.velocityX=s;

  wall=createSprite(1200, 200, t, 200);
  wall.shapeColor=(80,80,80);


  

}

function draw() {
  background("black"); 
  if (hasCollided(car,wall)){

  car.velocityX=0;
  d=((0.5*s*s*w)/(t*t*t))

  if (d<=10){
    wall.shapeColor="green"
  }
  if (d>10){
    wall.shapeColor="red"
  }

  }

  drawSprites();
}

function hasCollided (car,wall){
  carRightEdge=car.x+car.width;
  wallLeftEdge=wall.x;
  if(carRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}