let nClicks = 0;
let circleX = -1;
let circleY = -1;
let circleSize = 20;

let curveWidth = 350;
let balls = 15;
let movementPoints =  [];


function setup() {
  frameRate(1);
  createCanvas(800, 400);
}

//bezier(circleX, circleY, 
//           circleX + curveWidth, circleY, circleX + curveWidth, height, 
//           circleX + curveWidth, height)

async function animateBallMovement(){
  
  fill(255);
  steps = 20;
  push();
  for (i = 0; i <= (balls * 2); i++) {
    await sleep(1000)
    t = i / float(balls);
    
    background(220)
    xPos = 0;
    yPos = 1;
    x = movementPoints[i][xPos];
    y = movementPoints[i][yPos];
   
    if ((y + 75) > height){
      ellipse(x, y, circleSize + 2, circleSize - 2);
    } else if (x > (circleX + curveWidth) && (y + 75) > height){
        ellipse(x, y, circleSize - 2, circleSize + 3);
    } else {
      circle(x, y, circleSize);
    }
  }
  pop();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pointStoryboard(x1, y1, x2, y2, x3, y3, x4, y4) {
  for (i = 0; i <= balls; i++) {
    fill(255)
    t = i / float(balls);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    
    if ((y + 75) > height){
      ellipse(x, y, circleSize + 2, circleSize - 2);
    } else if (x > (circleX + curveWidth) && (y + 75) > height){
        ellipse(x, y, circleSize - 2, circleSize + 3);
    } else {
      circle(x, y, circleSize);
    }
    
    array = new Array(x, y);
    movementPoints.push(array);
  }
}

function mouseClicked() {
  
  if (nClicks == 0) {
    circleX =  mouseX;
    circleY = mouseY;
    groundX = mouseX + 100;
    groundY = height;
    
  }
  
  nClicks++;
}

function draw() {
  background(220);
  
  if (nClicks == 1 || nClicks == 2){
    //Render ball
    push()
    fill(255)
    circle(circleX, circleY, circleSize)
    pop()
  }
  
  if (nClicks <= 2 && nClicks != 0){
    noFill()
    push()
    bezier(circleX, circleY, 
           circleX + curveWidth, circleY, circleX + curveWidth, height, 
           circleX + curveWidth, height)
    
    bezier(circleX + curveWidth, height, 
          circleX + curveWidth, height, circleX + curveWidth, height - curveWidth,
          circleX + (curveWidth + (curveWidth / 2)), circleY)
    
    pop()
  }
  
  if (nClicks == 2){
    //Render ball summary in it's trajectory
    pointStoryboard(circleX, circleY, 
           circleX + curveWidth, circleY, circleX + curveWidth, height, 
           circleX + curveWidth, height)
    
    pointStoryboard(circleX + curveWidth, height, 
          circleX + curveWidth, height, circleX + curveWidth, height - curveWidth,
          circleX + (curveWidth + (curveWidth / 2)), circleY)
    
  }
  
  if (nClicks >= 3) {
    animateBallMovement();
  }
}