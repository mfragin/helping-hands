// s03_transformations_pt02.es

//  Let's look at how we can repeat transformations with little code

// you can multiply any command in SS and it will accumulate the changes

5 * { x 1.5 } box

// and these alone can produce pretty complex forms

20 * { y -1 ry 20 s 1.2 0.8 1.1 } box

/* How to read that last line of code:

The best way to get a hang of what is happening in structure synth
is to take it slow and try to imagine each step in the process.  For that
last line of code, I would read it as:

"each box will move down more on the y-axis, while rotating 20 degrees
 and also growing longer in the x and z directions, but getting thinner in 
the y direction..."

*/