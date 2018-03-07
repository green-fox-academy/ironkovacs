'use strict';



class Plant {
  color: string;
  waterLevel: number;
  type: string;


  constructor(color: string) {
    this.color = color;
    this.waterLevel = 0;
  }

  waterIt(amount: number) {
    this.waterLevel += amount;
  }

  needsWater(): boolean {
    return this.waterLevel < 5;
  }

  get plantColor() {
    return this.color;
  }
  get plantType() {
    return this.type;
  }
}

class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'flower';
  }
  waterIt(amount: number) {
    this.waterLevel += amount * .75;
  }
}


class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'tree';
  }

  needsWater(): boolean {
    return this.waterLevel < 10;
  }
  waterIt(amount: number) {
    this.waterLevel += amount * .4;
  }
}
class Garden {
  plants: Plant[];

  constructor() {
    this.plants = []
  }

  addPlant(p: Plant) {
    this.plants.push(p);
  }
  listPlants() {
    for (let i: number = 0; i < this.plants.length; i++) {
      console.log(this.plants[i]);
    }
  }
  waterPlants(amount: number) {
    let thirstyPlant = 0;
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        thirstyPlant += 1;
      }
    }
    const dose = amount / thirstyPlant;

    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        this.plants[i].waterIt(dose);
      }
    }
  }
}

let garden = new Garden()
garden.addPlant(new Flower('blue'))
garden.addPlant(new Tree('green'))
console.log(garden)
