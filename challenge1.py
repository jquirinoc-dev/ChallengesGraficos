import matplotlib.pyplot as plt
import numpy as np


def getSlope(x1, x2, y1, y2):
    return (y2 - y1) / (x2 - x1)

def findPoints(slope, x1, x2, y1, y2):
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

    xvalues = []
    yvalues = []
    for element in arr:
        xvalues.append(element[0])
        yvalues.append(element[1])
    
    plt.scatter(xvalues, yvalues)
    plt.show()



def main():

    x1, y1 = input("Enter first X and Y values: ").split()
    x2, y2 = input("Enter second X and Y values: ").split()

    slope = getSlope(int(x1), int(x2), int(y1), int(y2))
    findPoints(slope, int(x1), int(x2), int(y1), int(y2))

main()