
var movingRect;
var fixedRect;
var rect1,rect2;

function setup() {
  
  createCanvas(1200,800);
  fixedRect= createSprite(400, 200, 100, 50);
  movingRect= createSprite(400, 200, 50, 100);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";

rect1=createSprite(300,300,20,30);
rect2=createSprite(100,300,30,20);

rect1.velocityX=-4;
rect2.velocityX=4;
}
  
function draw() {
  background(0);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
bounceOff(rect2,rect1);

  drawSprites();
}











