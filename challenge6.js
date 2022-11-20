//Set up our starting values.

let startX = -1;
let startY = -1;
let endX = -1;
let endY = -1;

let firstPivotX = -1;
let firstPivotY = -1;
let secondPivotX = -1;
let secondPivotY = -1;

let pointCount = 0;

let movementFirst = false;
let movementSecond = false;

function setup() {
  createCanvas(400, 400);
}

function mousePressed(){
  //Check if mouse is pressed for the first time 
  // to start drawing a line with the mouse
  if (pointCount == 0){
    startX = mouseX;
    startY = mouseY;
    endX = mouseX;
    endY = mouseY;
    pointCount++;
  }
  
  //Store values after line is drawn for either
  // first or second pivot point for bezier function 
  if (pointCount == 2){
    firstPivotX = mouseX;
    firstPivotY = mouseY;
    pointCount++;
  } else if (pointCount == 3){
    secondPivotX = mouseX;
    secondPivotY = mouseY;
    pointCount++;
  }
  
  //Detect when a pivot is being dragged
  if (mouseX + 5 > firstPivotX &&
       mouseX - 5 < firstPivotX &&
        mouseY + 5 > firstPivotY && 
         mouseY - 5 < firstPivotY){
    
    movementFirst = true;
    
  } else if (mouseX + 5 > secondPivotX &&
              mouseX - 5 < secondPivotX &&
                mouseY + 5 > secondPivotY && 
                 mouseY - 5 < secondPivotY){
    
    movementSecond = true;
    
  }
  
  
}

function mouseReleased(){
  //Add 1 to poinCount when we release mouse
  // click and a line is drawn
  if (pointCount == 1){
    endX = mouseX;
    endY = mouseY;
    pointCount++;
  }
  
  //Move a pivot as we drag it
  if (movementFirst == true){
    firstPivotX = mouseX;
    firstPivotY = mouseY;
    movementFirst = false;
  }
  
  if (movementSecond == true){
    secondPivotX = mouseX;
    secondPivotY = mouseY;
    movementSecond = false;
  }
}

function draw() {
  background(220);
  stroke(255, 0, 0)
  strokeWeight(3);
  
  
  //Print point count for debugging
  console.log(pointCount);
  
  //Start drawing a line when we first click on screen
  if (pointCount == 1) {
    line(startX, startY, mouseX, mouseY);
  }
  
  //Keep the line on screen before we place our second
  //control point
  if (pointCount <= 3){
    line(startX, startY, endX, endY);
  }
  
  //If point is not being moved, display circle in positions
  //firstPivotX and firstPivotY
  if (movementFirst == false){
     circle(firstPivotX, firstPivotY, 5);
  } else { //Move circle to mouse position
    circle(mouseX, mouseY, 5);
  }
  
  //If point is not being moved, display circle in positions
  //secondPivotX and secondPivotY
  if (movementSecond == false){
     circle(secondPivotX, secondPivotY, 5);
  } else { //Move circle to mouse position
    circle(mouseX, mouseY, 5);
  }
  
  noFill()
  //If line is drawn and two control points are placed without being moved,
  //draw curve using stored values
  if (pointCount == 4 && movementFirst == 0 && movementSecond == 0) {
    bezier(startX, startY, firstPivotX, firstPivotY, secondPivotX, secondPivotY, endX, endY);
  } else if (pointCount == 4 && movementFirst == 1 && movementSecond == 0) {
    //This happens if we are moving the first point
    bezier(startX, startY, mouseX, mouseY, secondPivotX, secondPivotY, endX, endY);
  } else if (pointCount == 4 && movementFirst == 0 && movementSecond == 1) {
    //This happens if we are moving the second point
    bezier(startX, startY, firstPivotX, firstPivotY, mouseX, mouseY, endX, endY);
  }
}