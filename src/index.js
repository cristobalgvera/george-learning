import { forEach, forObject, iterate } from "./iterations/for.js";

// iterate(10)

// forEach([1, 2, 3, 4, 5])

const myObject = {
  name: "Cristóbal",
  address: 'Los Castaños 55, 44F',
  surname: "Gajardo",
  age: 25,
};

forObject(myObject)