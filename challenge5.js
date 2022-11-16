function setup() {
    createCanvas(640, 480);
  }
  
  
  function myTranslate(x, y, tX, tY) {
    newX = x + tX;
    newY = y + tY;
    return [newX, newY];
  }
  
  
  function myRotation(x, y, angle) {
    angle = angle * (PI / 180)
    pivX = width/2;
    pivY = height/2;
    newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle));
    newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle));
    return [newX, newY];
  }
  
  function myRotationPiv(x, y, angle, pivX, pivY) 
  {
    angle = angle * (PI / 180)
    newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle));
    newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle));
    return [newX, newY];
  }
  
  function myScaling(x, y, scaleX, scaleY, pX, pY) {
    newX = x * scaleX + pX * (1 - scaleX);
    newY = y * scaleY + pY * (1 - scaleY);
    return [newX, newY];
  }
  
  function myReflectionInY(x, y, yMirror) {
    if (y > yMirror){
      newY = y - ((y - yMirror) * 2);
    } else {
      newY = y + ((yMirror - y) * 2);
    }
    return [x, newY];
  }
  
  function myShearX(x, y,sx) {
      newX = x+sx*y;
      print(newX);
      newY = y;
      return [newX,newY];
    }
    
    function myShearY(x, y, sy) {
      newY = y+sy*x;
      newX = x;
      return [newX, newY];
    }
  
  function draw() {
    background(102);
    fill(1);
    polygon(width/2, height/2, 100, 6, myScaling, 2.1, 2.1, width/2, height/2);
    fill(1);
    polygon(width/2, height/2, 210, 6, myTranslate, 420, 0);
    fill(1);
    polygon(width/2, height/2, 210, 6, myTranslate, -420, 0);
    fill(255);
    polygon(width/2, height/2, 100, 6, null);
    //fill(1, 255, 1);
    //polygon(width/2, height/2, 100, 6, myRotation, 50);
    fill(255, 1, 1);
    polygon(width/2, height/2, 100, 6, myScaling, 1.05, 1.05, width/2, height/2);
    //fill(255, 1, 1);
    //polygon(width/2, height/2, 100, 6, myRotationPiv, 40, (width/2), (height/2));
    fill(255, 150, 0);
    polygon(width/2, height/2, 100, 6, myRotationPiv, 30, (width/2), (height/2));
    fill(255, 220, 0);
    polygon(width/2, height/2, 100, 6, myRotationPiv, 36, (width/2), (height/2));
    fill(1, 220, 1);
    polygon(width/2, height/2, 100, 6, myRotationPiv, 48, (width/2), (height/2));
    fill(1, 1, 220);
    polygon(width/2, height/2, 100, 6, myRotationPiv, 60, (width/2), (height/2));
    fill(180, 1, 255);
    polygon(width/2, height/2, 100, 6, myRotationPiv, 72, (width/2), (height/2));
    //fill(255, 50, 255);
    //polygon(width/2, height/2, 100, 6, myRotationPiv, 84, (width/2), (height/2));
    fill(255, 50, 255);
    polygon(width/2, height/2, 100, 6, myRotation, 84);
    
    fill(255);
    polygon(width/2, 75, 50, 3, null);
    fill(255);
    polygon(width/2, 75, 50, 3, myReflectionInY, 245);
    fill(255);
    polygon(350, height/2, 50, 4, myShearX, -1);
    fill(255);
    polygon(525, 775, 50, 4, myShearY, -1);
    
  }
  
  function polygon(x, y, radius, npoints, transform, ...params) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      if (transform != null) {
        [sx, sy] = transform(sx,sy, ...params);
      }
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }