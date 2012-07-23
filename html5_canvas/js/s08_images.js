// s08_images.js
// 
// Demonstrates how to use images on the canvas.
// 
// --mFragin 07.08.2012 16:15:15
// Note the image uses here is Creative Commons licensed by 
// werner22brigitte and taken from pixabay.  I have resized it to 
// 300 by 191 pixels


// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// one way to use an image on the canvas is to define it in JavaScript
// first create an Image instance...
var pump = new Image();
// and now set the file source to that of our image
pump.src = "../media/pump.png";

// Before calling the image in the code, though, we should ensure that
// it has properly loaded and is ready to be used.  This is even more
// important with bigger images

// here we are creating an event listener to fire off when the load event
// on the image occurs:

pump.addEventListener('load', eventPumpLoaded, false);

// that attaches that event listener to the pump object and tells it 
// that the even we care about is the actual loading of that object
// itself.  We also tell it to call the eventPumpLoaded function when
// it occurs.  That means we need to write a function here.  DARN!  I 
// was going to wait to do the tutorial on functions later.  Oh well,
// just roll with it...

function eventPumpLoaded() {
    drawScreen();
}

//  ... and one function begets another...

function drawScreen() {
    ctx.drawImage(pump, 100, 20);
    // we can change the size of the image if we want to
    // the last two numbers are the new width and height
    ctx.drawImage(pump, 420, 20, 100, 70);
    ctx.drawImage(pump, 420, 100, 140, 30);
    // we can also choose to only use part of the original image
    // this will be important later when we use sprite sheets
    // key:  (Image, sx, sy, sw, sh, dx, dy, dw, dh) s=source d=destination
    ctx.drawImage(pump, 50, 10, 40, 120, 200, 220, 40, 120);
    ctx.drawImage(pump, 100, 30, 100, 120, 250, 240, 100, 120); 
    ctx.drawImage(pump, 210, 50, 40, 120, 360, 260, 40, 120);
    
    
}

