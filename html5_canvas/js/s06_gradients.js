// s05_gradients.js
// 
// Demonstrates how to use gradients on the canvas.
// 
// --mFragin 06.27.2012 20:04:35

// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// The main thing here is that the context gets set with a gradient,
//  we don't just "fill a shape with a gradient".  

// I'm going to stick to linear gradients.  Even with linear gradients,
// though, there are multiple ways to implement them.  I prefer this 
// method that treats the gradient as a fill


// create a reference for the gradient
// the way this works is the first point is where it starts
// and the second is where it ends
var gr = ctx.createLinearGradient(0, 0, 100, 0);

// now we need to add the color stops somewhere on the gradient
// I'll keep it simple and just add two here, one at the start ("0") 
// and one at the end "(1)" of the gradient space
gr.addColorStop(0, "#FF0055");
gr.addColorStop(1, "#000055");

// now we'll set the fill style of the canvas to the gradient
ctx.fillStyle = gr;

ctx.fillRect(10, 10, 80, 80);

// The important thing to see here is that the gradent and the shape
// are separate, so we can use one gradient for multiple shapes:

var gr2 = ctx.createLinearGradient(10, 0, 590, 0);
gr2.addColorStop(0, "#0000FF");
gr2.addColorStop(1, "#FF0000");
ctx.fillStyle = gr2;

ctx.fillRect(10, 110, 80, 50);
ctx.fillRect(100, 110, 80, 50);
ctx.fillRect(200, 110, 80, 50);
ctx.fillRect(300, 110, 80, 50);
ctx.fillRect(400, 110, 80, 50);
ctx.fillRect(500, 110, 80, 50);

// One way to learn more about gradients is to use Inkscape.  Here are
// a few more examples to show how you can really get some cool variations
// just by changing the stops

// this one will have a diagonal gradient
var gr3 = ctx.createLinearGradient(0, 210, 100, 290);
gr3.addColorStop(0, "#00FF00");
gr3.addColorStop(1, "#0000FF");
ctx.fillStyle = gr3;

ctx.fillRect(10, 210, 80, 80);

//this one will have a vertical gradient
var gr4 = ctx.createLinearGradient(0, 200, 0, 300);
gr4.addColorStop(0, "#00FF00");
gr4.addColorStop(1, "#0000FF");
ctx.fillStyle = gr4;

ctx.fillRect(100, 210, 80, 80);

// this one as a more compact gradient centered in the top
var gr5 = ctx.createLinearGradient(0, 200, 0, 250);
gr5.addColorStop(0, "#00FF00");
gr5.addColorStop(1, "#0000FF");
ctx.fillStyle = gr5;

ctx.fillRect(200, 210, 80, 80);


// this one will use multiple stops
var gr6 = ctx.createLinearGradient(300, 0, 600, 0);
gr6.addColorStop(0, "#00FF00");
gr6.addColorStop(0.5, "#0000FF");

gr6.addColorStop(1, "#FF0000");
ctx.fillStyle = gr6;

ctx.lineWidth = 5;
ctx.fillRect(300, 210, 290, 80);
ctx.strokeRect(300, 210, 290, 80);

// although this is the last one to be drawn, it will appear
// on the upper right part.  If you use a stop that is the same as 
// the canvas background, you can make it appear to fade away

var gr7 = ctx.createLinearGradient(0, 0, 600, 0);

gr7.addColorStop(0, "#ff00ff");
gr7.addColorStop(0.7, "#FFFFFF");


ctx.fillStyle = gr7;


ctx.fillRect(100, 10, 490, 80);


