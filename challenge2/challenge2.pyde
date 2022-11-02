def doline(x1, y1, x2, y2):
    slope = (y2 - y1) / (x2 - x1)
    print(slope)
    
    arr = []
    startingY = y1
    moving = 1
    start = x1
    end = x2 + 1
    if x1 > x2:
        end = x2 - 1
        moving = -1
        
        slope = -slope

    for i in range(start, end, moving):
        tempPoint = [i, startingY]
        arr.append(tempPoint)
        startingY+= slope
        
    print(arr)
    
    for element in arr:
        point(element[0], element[1])
        
    
    
    
    
def setup():
    size(400, 400)
    noStroke()


def draw():
    background(220)
    noSmooth()
    stroke(0)
    doline(1, 2, 100, 20)
    stroke(0)
    doline(10, 200, 50, 10)
    stroke(0)
    doline(300, 300, 10, 10)
    stroke(0)
    doline(200, 300, 250, 50)
    stroke(0)
    doline(350, 350, 100, 300)
