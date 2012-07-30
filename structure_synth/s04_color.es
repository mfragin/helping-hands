// s04_color.es

//  Let's start changing the color!  Heck, even no color at all looks better than the default red.

// for most of my sketches, I like to make a white tile to go under everything:
1 * { y -1 s 60 1 60 color white } box

// As in Context Free Art, the most common way to change color is to 
// change the hue

36 * { ry 10 x 2 h 10  } box 

// In this example, the hue is changed by 10 for each of 36 steps.
// Hue loops at 360, so by the time we get back to the start, we have
// gone through the full spectrum by 10 hue pts per step

// There is much more to learn about colors in SS, so check the 
// site for the documentation!  You can even have SS choose from 
// random pixels in an image of your choice!  Cool!