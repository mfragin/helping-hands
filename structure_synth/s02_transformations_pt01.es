// s02_transformations_pt01.es

//  Let's learn the basic types of transformations in SS

/*
Note: as I write this, SS allows you to "right click" in the code area and
pretty much every command is available to you in that way.

For this part, we will just look at the three most common transformations:
  --translations (move in a certain direction)
  --rotations (rotate around a certain axis)
  --size adjustments (change the scale of the environment)

Note: As much as I'd like to show these individually, without translation
it is very hard to view anything, as it would all be in the same spot.  So,
most of these will include a translation first and then another transformation.
*/

// a simple box
box
// a box moved over 2 units on the x axis
{ x 2 } box
// a box moved over 4 units and also rotated on the same axis
{ x 4 rx 30 } box
// a box moved over 6 units and also rotated on the y axis
{ x 6 ry 30 } box
// a box moved over 8 units and also rotated on the z axis
{ x 8 rz 30 } box
// a box moved over 3 units and up 3 units on y axis
{ x 3 y 3 } box
// a box moved over 5 units and up 5 units on y axis
{ x 5 y 5 } box
// a box moved up 3 units on y axis and "back" 5 units on the z axis
{ y 3 z -5 } box
// a box moved left 8 units and made half the size it was
{ x -8 s 0.5 } box
// finally, a box moved down a bit on the y axis and then scaled in x and z directions to make a tile shape
{ y -3 s 20 1 10 } box

