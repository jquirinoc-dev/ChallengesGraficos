//Este codigo no cumple con todos los requerimientos
//pero no se pudo terminar a tiempo

lineIsDone = false;
col = 0;
startX = 0;
startY = 0;
endX = 0;
endY = 0;
controlx1 = 0;
controly1 = 0;
controlx2 = 0;
controly2 = 0;
pointsAfter = 0;

function setup() {
  createCanvas(400, 400);
}

function mouseClicked(){
  strokeWeight(3);
  stroke(255, 1, 1);
  
  if (endX != 0 && endX != startX && lineIsDone == true && pointsAfter <= 3){
    pointsAfter++;
    point(mouseX, mouseY);
    if (pointsAfter == 2){
      controlx1 = mouseX;
      controly1 = mouseY;
    }
    if  (pointsAfter == 3){
      controlx2 = mouseX;
      controly2 = mouseY;
    }
  }
  
  
  
  console.log("point", pointsAfter)
}

function mousePressed(){
  
  if (lineIsDone == false) {
    startX = mouseX;
    startY = mouseY;
    endX = startX;
    endY = startY; 
  } else {
    point(mouseX, mouseY);
  }
  
}

function mouseDragged(){
  if (lineIsDone == false){
    endX = mouseX;
    endY = mouseY;
    line(startX, startY, endX, endY);
  }

}

function mouseReleased(){
  if (lineIsDone == false){
    endX = mouseX;
    endY = mouseY;
    lineIsDone = true;
  }
  
  
}

function draw() {
  background(255, 255, 255)
  fill(col);
  strokeWeight(2);
  stroke(255, 1, 1);
  line(startX, startY, endX, endY);
  if (lineIsDone){
    point(controlx1, controly1);
    point(controlx2, controly2);
    bezier(startX, startY, controlx1, controly1, endX, endY, controlx2, controly2);
  }
  
}
