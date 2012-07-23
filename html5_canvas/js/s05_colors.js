// s05_colors.js
// 
// Demonstrates how to use colors on the canvas.
// 
// --mFragin 06.27.2012 20:04:35

// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// There are quite a few ways to choose colors in JS for the canvas.
// I will show a few simple examples of each method.  For each method,
// we will begin by setting the context fillStyle

// there are some color names (strings) we can use
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";

ctx.fillRect(10,10,80,180);
ctx.strokeRect(10,10,80,180);

// we can use RGB values 0-255 in the three channels Red, Green, Blue
ctx.fillStyle = "rgb(128, 0, 255)";

ctx.fillRect(110, 10, 80, 180);
ctx.strokeRect(110, 10, 80, 180);

// we can use hexadecimal values:
ctx.fillStyle = "#ff0099";

ctx.fillRect(210, 10, 80, 180);
ctx.strokeRect(210, 10, 80, 180);

// we can use RGBA values, with the last value being the alpha trans-
// parency, with 0 being min and 1 being max:

ctx.fillStyle = "rgba(100,200,30,0.6)";


ctx.fillRect(5, 50, 390, 100);
ctx.strokeRect(5, 50, 390, 100);

//loops can be used to affect colors.  I use rbg for these
// the hardest part here is to realize that colors are identified by
// strings, so I use the JS concatenation operator "+" and glue the
// parts together.  The variables are then converted into strings.

var rCh = 255;
var bCh = 128;
var ySpot = 220;

for (var xSpot=5; xSpot < 450; xSpot+=50)
{
    ctx.fillStyle = "rgb( "+rCh+", 0, "+bCh+" )";
    ctx.fillRect( xSpot, ySpot, 40, 60);
    ctx.strokeRect( xSpot, ySpot, 40, 60);
    // update variables
    rCh -= 30;
    bCh += 15;
    ySpot += 13;
}






