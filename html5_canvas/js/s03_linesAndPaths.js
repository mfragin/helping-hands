// s03_linesAndPaths.js
// 
// Demonstrates how to use paths in js.
// 
// --mFragin 06.27.2012 20:04:35

// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// Surprisingly enough, there are no other basic primitives shapes in
// Canvas besides the rectangle!  No circles, triangles, or stars, like
// in SVG.  But, if you are a minimalist, you will appreciate how clean 
// the Canvas API is when it comes to this, as we have all the tools we
// need because we have ... PATHS!

// A path is basically a series of points on the drawing surface.  How 
// they are used is up to us, and we have a LOT of power to make the 
// Canvas do exactly what we want.  So let's get started.

ctx.strokeStyle = "blue";
ctx.lineWidth = 16; //default is 1

// Here's a simple path example
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(75, 25);
ctx.lineTo(100, 75);
ctx.lineTo(125, 25);
ctx.lineTo(150, 50);
ctx.stroke();
ctx.closePath();

// Okay, that made the first example.  Now you can also control how 
// the ends of lines (caps) and where lines join are handled, although
// I personally don't use that much.  Nonetheless, here's some examples.

ctx.lineCap = 'square'; //default is 'butt'
ctx.lineJoin= 'bevel'; //default is 'miter'

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(75, 125);
ctx.lineTo(100, 175);
ctx.lineTo(125, 125);
ctx.lineTo(150, 150);
ctx.stroke();
ctx.closePath();


ctx.lineCap = 'round'; //default is 'butt'
ctx.lineJoin= 'round'; //default is 'miter'

ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(75, 225);
ctx.lineTo(100, 275);
ctx.lineTo(125, 225);
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();

// Just for fun, let's use a loop to make something here
ctx.lineWidth = 5;
ctx.strokeStyle = "#550033";
for (var i = 50; i < 400; i=i+50)
{
    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(250, i-25);
    ctx.lineTo(350, i+25);
    ctx.lineTo(375, i);
    ctx.stroke();
    ctx.closePath();
}






