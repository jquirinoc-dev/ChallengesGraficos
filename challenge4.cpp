#include <GL/glut.h>
#include <math.h>
#include <stdlib.h>
#include <iostream>
#include <random>
#include <ctime>

const double TWO_PI = 6.2831853;
int count = 5;

/* Initial display-window size. */
GLsizei winWidth = 400, winHeight = 400;
GLuint regHex;

class screenPt
{
private:
    GLint x, y;
public:
    /* Default Constructor: initializes coordinate position to (0, 0).*/
    screenPt ( ) {
	x = y = 0;
    }
    void setCoords (GLint xCoord, GLint yCoord) {
	x = xCoord;
	y = yCoord;
    }
    GLint getx ( ) const {
	return x;
    }
    GLint gety ( ) const {
	return y;
    }
};


static void init (void)
{
    
    glClearColor (1.0, 1.0, 1.0, 0.0); //    Display-window color = white.
    /* Set up a display list for a red regular hexagon.
     * Vertices for the hexagon are six equally spaced
     * points around the circumference of a circle.
     */
    
}

void renderer(){
	
}

void regHexagon (void)
{
    
    screenPt hexVertex, circCtr;
    GLdouble theta;
    GLint k;
    /* Set circle center coordinates. */
    circCtr.setCoords (winWidth / 2, winHeight / 2);
    
	glClear (GL_COLOR_BUFFER_BIT);
	srand(time(NULL));
    glColor3f (rand() / static_cast<float>(RAND_MAX), 
    			rand() / static_cast<float>(RAND_MAX), 
    			rand() / static_cast<float>(RAND_MAX));  // Random collor fill
    glBegin (GL_POLYGON);
    for (k = 0; k < count; k++) {
	theta = TWO_PI * k / (float)count;
	hexVertex.setCoords (circCtr.getx ( ) + 150 * cos (theta),
			     circCtr.gety ( ) + 150 * sin (theta));
	glVertex2i (hexVertex.getx ( ), hexVertex.gety ( ));
    }
    glEnd ( );
    glFlush ( );
}

void mouseClick (GLint button, GLint action, GLint xMouse, GLint yMouse)
{
    if (button == GLUT_LEFT_BUTTON && action == GLUT_DOWN){
		count++;
		if (count > 12){
			count = 5;
		}
		std::cout << count << std::endl;
	}
	
	regHexagon();
    glFlush ( );
}

void winReshapeFcn (int newWidth, int newHeight)
{
    glMatrixMode (GL_PROJECTION);
    glLoadIdentity ( );
    gluOrtho2D (0.0, (GLdouble) newWidth, 0.0, (GLdouble) newHeight);
    glClear (GL_COLOR_BUFFER_BIT);
}

int main (int argc, char** argv)
{
    glutInit (&argc, argv);
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
    glutInitWindowPosition (100, 100);
    glutInitWindowSize (winWidth, winHeight);
    glutCreateWindow ("Polygon reshaping and random coloring");
    init ( );
    glutDisplayFunc (regHexagon);
    glutReshapeFunc (winReshapeFcn);
    glutMouseFunc (mouseClick);
    glutMainLoop ( );
    return 0;
}
