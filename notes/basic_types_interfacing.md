```

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string] // tuple type - must contain number, string


interface Person extends X {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type X = {
  a: string;
  b: number;
}

type Y = X & {
  c: string;
  d: number;
}

let y: Y = {
  c: 'hello',
  d: 123,
  a: 'yo',
  b: 23
}

let person: Person = {
  name: "Nick",
  a: 'hell',
  b: 123
}

let personName: unknown;

// let lotsOfPeople: Person[];
```