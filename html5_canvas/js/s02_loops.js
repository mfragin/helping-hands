// s02_loops.js
// 
// Demonstrates how to use loops in js.
// 
// --mFragin 06.27.2012 20:04:35

// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// Loops are huge in graphics and game programming.  My goal here is
// not to teach you how to use loops for graphics, but to give you 
// examples of the syntax in JavaScript for loops

ctx.fillStyle = "red";
ctx.strokeStyle = "black";

// for loop
for (var i=0; i<10; i++)
{
    ctx.fillRect(i*40+10, 20, 20, 80);
    ctx.strokeRect(i*40+10, 20, 20, 80);
}

ctx.fillStyle="blue";

// while loop
var xLoc = 10;
var yLoc = 120;
var stepper = 2;

while (xLoc < 350)
{
    ctx.fillRect(xLoc, yLoc, 10, 8);
    ctx.strokeRect(xLoc, yLoc, 10, 8);
    // now update variables
    xLoc += stepper;
    stepper *= 2;
    yLoc += 20;
}
    
    




