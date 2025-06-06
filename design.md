Please revisit this schema @section_node.rs  of math documentation. Remember we are building a ultra flexible yet formal mathematics rendering engine. Currently the top node is MathDocument which is a scientific article style, but we need much more than that. We need 
1. textbook structure, 
2. wikipedia structure, 
3. math notes mathematician passes to each other, 
4. notes people make to help them understand math, 
5. comparison page where object is compared side by side, 
6. transformation page where a math theory is mapped to category theory or type theory side by side with both side highlightable, 
7. math types mapping with a math expression showing exactly how each subexpression is typed
8. a temporary panel which serve as the resource for math objects to morph into others.
9. a tooltip structure that contain a condensed document, 
10. special math wiki page like @https://ncatlab.org/nlab/show/%28-1%29-category  where every key terminology is clickable, 
11. special math page designed for turn-formal where every object and operation has animation triggable in the page,
12. self contained publishable math paper! but still with links to resources
13. self contained blog post style where anyone can write rigorous math content together with application and media to display to the public, the math definition therefore can be arbitrarily easy and verbose
14. mini program/playground generated by some math constructs, math theory, or math derivation step where there are buttons to change the parameter, turn on and off stuff, like a brilliant.org page. This is best used in example area of math concepts!

thoses scenario of math visualization is dynmaic and interactable but they are all build upon a static structure where the animation are temporarily displayed on top of them. We can also change the layout of any page at runtime, but the AST structure is likely remain isomorphic to the original position.

please use as little types to represent those scneario as possible! Please be reasonable and recursive when you design the structure of the types!