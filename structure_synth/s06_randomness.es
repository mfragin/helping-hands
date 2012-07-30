// s06_randomness.es

//  Structure Synth is similar to Context Free Art in how it handles randomness.
// If you have more than one rule with the same name, SS will choose
// between the rules randomly.  You can add relative weights to these
// rules to make certain versions more likely to be choosen.

// By the way, the "seed" value at the top of the IDE can be used to re-create
// a particular version of a random shape.


// Now we'll define a rule more than once and build something from it.  
// This can get VERY complex, so to keep this example simple, I'm 
// only going to change one or two properties between rule versions

// a blue sphere
rule  myShape w 1
{
  { color blue } sphere
}

// a yellow french fry shape
rule  myShape w 5
{
  { s 0.8 10 0.8 color yellow } box
}

// a green cube
rule  myShape w 0.5
{
  { color green } box
}

// Now let's tell SS to make 20 of them
20 * { x 1 rx 5 } myShape

// Run this several times to see how the randomness works!