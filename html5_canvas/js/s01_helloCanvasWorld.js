
// This is the first in a series of short HTML5 canvas programs
// that will help students learn how to use the canvas for making games.

// s01_helloCanvasWorld.js
// 
// Simple example to show one way to use html+css+js with the canvas.
// Note that you could simply put all of this code (even the css) into 
// the helloCanvasWorld.html file, but in the long run you will do 
// better to keep things separated.

// For all Canvas programs, we will start something like this, where 
// we declare a variable to store the context object that we get from 
// the canvas object.  Note that we could have done this in more steps, 
// but since the canvas itself is not much use to us, we just use it 
// here to get the context from it.  It's the context obj that we'll be 
// using in these programs.
// --mFragin 06.27.2012 20:04:35

// the "ctx" name here is just a convention, we could call it "theContext" 
// or really anything.  I prefer to use "ctx"
var ctx = document.getElementById('canvas').getContext('2d');

// now that we have the context, let's create a few colored rectangles


// set the fill and strok style
ctx.fillStyle = "#00FF00";  //bright green
ctx.strokeStyle = "#330033"; //dark purple
// To draw a rectangle, we can use fillRect or strokeRect and the
// parameters are (x, y, width, height)
ctx.fillRect(50, 50, 100, 40);
ctx.strokeRect(50, 50, 100, 40);

// we can spefify colors in other ways (not just hexadecimal)
ctx.fillStyle = "rgb(128, 0, 234)";
ctx.strokeStyle = "red";

ctx.fillRect(200, 50, 30, 50);
ctx.strokeRect(200, 50, 30, 50);

// note that you don't have to do both fill and stroke, or give them 
// the same values
ctx.fillRect(100, 300, 100, 50);

ctx.strokeRect(120, 320, 100, 20); 
 


