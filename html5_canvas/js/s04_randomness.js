// s04_randomness.js
// 
// Demonstrates how to use random function in js.
// 
// --mFragin 06.28.2012 15:32:5806.27.2012 20:04:35

// This is a little different this time, because I want to be able 
// to reference both the canvas and the context with variables....

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// let's declare some variables here so you can change them 
// on your own and see what happens.

var numberOfRectangles = 300;
var minWidth = 10;
var maxWidth = 100;
var minHeight = 6;
var maxHeight = 40;

// the Math.random() function in JavaScript is super minimal.  All
// it does is return a random number greater than or equal to 0.0 and
// less than 1.0
//
// It's up to us to make that work for whatever situation we are 
// trying to put into code.

// For this example, my idea is to draw a frame around an area in 
// which the random rectangles will be drawn.  Because rectangles 
// are drawn by positioning their upper left vertex, I will write
// this so that rectangles are never drawn outside of a certain area
// of the canvas.  I'll also add some basic framing stuff to make
// it look nicer

// First let's draw the entire canvas black
ctx.fillStyle = "black";
// here is why I started this sketch by getting both the canvas
// object and also the canvas context object:
ctx.fillRect(1,1,canvas.width, canvas.height);
// now a smaller inner area to draw on
ctx.fillStyle = "#004400";
ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

// now the heart of this sketch.  Here we make a loop to draw 
// some random rectangles around the inner canvas area we just made.
// notice how I use variables here that will allow this to still work
// on basically any reasonably sized canvas (200x200 minimum)

ctx.strokeStyle = "#00ff00";


for (var i = 0; i < numberOfRectangles; i++)
{
    var xLoc = Math.random() * (canvas.width - 100 - maxWidth) + 50;
    var yLoc = Math.random() * (canvas.height - 100 - maxHeight) + 50;
    var thisWidth = Math.random() * (maxWidth-minWidth) + minWidth;
    var thisHeight = Math.random() * (maxHeight-minHeight) + minHeight; 
    ctx.strokeRect(xLoc, yLoc, thisWidth, thisHeight);
}

// Question for further study:
// Notice that the rectangles seem to be less likely along the far right 
// and bottom edges of the drawing area?  The code above could be improved
// to get rid of that effect, while still not letting any rectangles be 
// drawn anywhere outside the drawing area.  Can you figure out how?


