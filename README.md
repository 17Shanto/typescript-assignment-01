<h3>1. What are some differences between interfaces and types in TypeScript?</h3>
   
Type and interfaces do almost same work but there are some differences too. Type is more versatile than interface.
Types are better suited for defining complex types, such as union types, intersection types, and mapped types. On the otherhand
inter face allowing multiple declarations with the same name to be merged into a single declaration. Types do not support this.
Syntax: Interfaces use the interface keyword, while types use the type keyword

Example
// Interface example </br>
interface Animal {</br>
  name: string; </br>
}

interface Dog extends Animal {</br>
  breed: string;</br>
}</br>

// Type example</br>
type Point = {</br>
  x: number;</br>
  y: number;</br>
};</br>


