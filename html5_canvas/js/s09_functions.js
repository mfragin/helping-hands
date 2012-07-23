// s09_functions.js
// 
// Demonstrates a function we make.
// 
// --mFragin 07.08.2012 16:15:15
// 


// the usual beginning here:
var ctx = document.getElementById('canvas').getContext('2d');

// This sketch is not much different than the last one, but since we 
// saw functions in that one, we can re-use it here, more creatively...

// Once again we'll use the image that was Creative Commons licensed by 
// werner22brigitte and taken from pixabay.  The dimentions are 640 x 408.

var pump = new Image();
// and now set the file source to that of our image
pump.src = "../media/oil_pump.jpg";

// here we are creating an event listener to fire off when the load event
// on the image occurs:

pump.addEventListener('load', eventPumpLoaded, false);


function eventPumpLoaded() {
    drawScreen(6, 4);
}

// this time we'll create a function that takes some variables
// if you use this code, try changing the way the function was 
// called above. 
// Note: this takes some math to figure out how to make it work right.
// Just so you know, I had a piece of paper with me and did the calculations
// by hand to make sure it worked.  Don't be afraid to sketch something out
// if it is complex.  Don't be lazy!

function drawScreen(numRows, numCols) {
    // first let's set the background dark
    ctx.fillStyle = "black";
    ctx.fillRect(-1,-1,642, 410);
    
    // we're going to make a number of windows that will open up to
    // the image.  
    // Later on we should re-write this to work for any image, replaceing 
    // 640 with a variable and 408 with a variable.
    celWidth = (640.0 / numCols)
    celHeight = (408.0 / numRows)
    winWidth = celWidth * 0.8;
    winHeight = celHeight * 0.8;
    hBorder = 0.2 * celWidth;
    vBorder = 0.2 * celHeight;
    
    // now a nested loop
    for (var col = hBorder/2; col < 640; col += celWidth)
    {
        for (var row = vBorder/2; row < 408; row += celHeight)
        {
            ctx.drawImage(pump, col, row, winWidth, winHeight, col, row, winWidth, winHeight, col, row);
        }
    }
    

    
    
}

