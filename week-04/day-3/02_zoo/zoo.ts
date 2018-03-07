'use strict';
// We are going to represent a Zoo. The animals are cuter than humans, so let's focus on them right now.

// So we need an abstract Animal class
abstract class Animal {
  name: string;
  age: number;
  gender: string;
  diet: string;
  kidFriendly: boolean;

  constructor(name: string) {
    this.name = name;
  }
  // it has name, age field
  // it has getName() and breed() methods
  getName(): string {
    return this.name;
  }
  abstract breed()
}

  // Have we got all fields and methods we should? What about gender? Any other? Write down at least 3 fields and/or methods that should be included in Animal.


// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. We need to define specific fields and methods for each. For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich. Write down at least 2 of field and/or method what is common in each kind.

abstract class EggLayers extends Animal {
  breedMethod: string = "egg"
  breed() {
    return ' laying egg'
  }
}

class Mammal extends Animal {
  breedMethod: string = "viviparous"
  constructor(name) {
    super(name)
  }
  breed() {
    return 'pushing miniature versions out.'
  }
}
class Bird extends EggLayers {
  constructor(name) {
    super(name)
  }
  breed() {
    return ' laying egg'
  }
}
class Reptile extends EggLayers {
  constructor(name) {
    super(name)
  }
}
// Most of the Reptiles breed() by laying eggs too, it is common with Birds.

// Create the project and the classes above.

// The Zoo app should be invoked by the following example code outside of the animals package:

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

// We expect the following output:

// How do you breed?

// A Crocodile is breeding by laying eggs.

// A Koala is breeding by pushing miniature versions out.

// A Bird is breeding by laying eggs.
