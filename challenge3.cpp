// First Program in OpenGL
// Compile with:
// g++ hello-OpenGL.cpp -o hello-opengl -lglut -lGLU -lGL

#include <GL/glut.h>
#include <vector>
#include <iostream>
// (or others, depending on the system in use)
void init (void)
{
    glClearColor (1.0, 1.0, 1.0, 0.0);    // Set display-window color to white.
    glMatrixMode (GL_PROJECTION);         // Set projection parameters.
    gluOrtho2D (0.0, 400.0, 0.0, 400.0);
}

void drawLines(void){
	std::vector<std::pair<int, int>> linesVector = {{1, 2}, {100, 20},  	                                                  {10, 200}, {50, 10},                 	  											  {300, 300}, {10, 10}, 	         										  {200, 300},{250, 50}, 	 												  {350, 350}, {100, 300}};
	

	glClear (GL_COLOR_BUFFER_BIT);
	glColor3f(1.0, 0.0, 0.5);
	
	glBegin(GL_LINES);
	for (int i = 0; i < linesVector.size(); i++){
		glVertex2i(linesVector[i].first, linesVector[i].second);
	}
	glEnd ( );
	
    glFlush ( );
}

int main (int argc, char** argv)
{
    glutInit (&argc, argv);    // Initialize GLUT.
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);    // Set display mode.
    glutInitWindowPosition (50, 100);    // Set top-left display-window position.
    glutInitWindowSize (400, 400);    // Set display-window width and height.
    glutCreateWindow ("Line Drawer"); // Create display window.
    init ( ); // Execute initialization procedure.
    glutDisplayFunc (drawLines);    // Send graphics to display window.
    //glutDisplayFunc (points);
    glutMainLoop ( );    // Display everything and wait.
    return 0;
}
