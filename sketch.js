function setup() {
  createCanvas(8000,8000);

  fixedRect = createSprite(400, 200, 50, 150);
fixedRect.shapeColor = "pink";

  movingRect = createSprite(600,150, 150, 50);
movingRect.shapeColor = "pink"

  object1= createSprite(320, 300, 50, 30);
object1.shapeColor = "red"

  object2 = createSprite(200, 300, 15, 15);
object2.shapeColor = "yellow"

  object3 = createSprite(420, 300, 25, 15);
object3.shapeColor = "green"

fixedRect.debug = true
movingRect.debug = true
}


function draw() {
  background("blue");  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect, object2)){
  movingRect.shapeColor = "purple";
  object2.shapeColor = "purple";
}
else{
  object2.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
  

}

  drawSprites();
}


function isTouching(movingRect, fixedRect){

  if (movingRect.x - fixedRect.x < fixedRect.width/2+ movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2+ movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2+ movingRect.height/2 )
    {
return true;

    }
     
    else {
    return false;
    }
    

}