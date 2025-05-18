<h3>1. What are some differences between interfaces and types in TypeScript?</h3>
   
<p>Type and interfaces do almost same work but there are some differences too. Type is more versatile than interface.
Types are better suited for defining complex types, such as union types, intersection types, and mapped types. On the otherhand
inter face allowing multiple declarations with the same name to be merged into a single declaration. Types do not support this.
Syntax: Interfaces use the interface keyword, while types use the type keyword</p>

Example:
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


<h3>2. What is the use of the keyof keyword in TypeScript? Provide an example.</h3>
<p>Keyof is a powerful keyword of Typescript. It is is used to extract the keys of a given type (usually an object type).
This is more convenient to work with object and it provides an object the dynamic ability</p>


Example:
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "isStudent"


