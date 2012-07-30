// s05_rules.es

//  Now we get to the true power of SS: using rules to simplify how we
// produce objects from other objects.

// This is the same as last sketch:
1 * { y -1 s 60 1 60 color white } box

// Here, though, I am going to take the code from last sketch and
//  "wrap it up" inside a rule statement:

rule ringOfColors
{
	36 * { ry 10 x 2 h 10  } box 
}

//That's just a rule, though.  So to see it drawn, we have to ask SS to 
// make a "ringOfColors".  The great thing here is that we can apply
// any transformations to the more complex object--resulting in even 
// more complexity at little cost as far as code goes....

// draw 10 rings of colors, moving them up and rotating them a little

10 * { y 0.5 ry 3 s 0.9 } ringOfColors

//Now THAT is generative art!!!
