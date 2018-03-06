'use strict';

class Garden {
  flowers: Plant[] = [];
  trees: Plant[] = [];

  addNewPlant(type) {
    this.t
  }

  watering() {

  }
  getWateringStatus() {

  }
  constructor(flowers: Plant[], trees: Plant[], type: string) {
    this.flowers = flowers;
    this.trees = trees;
    

  }

}

class Plant {
  type: string;
  color: string;
  waterAbsorb: number;
  waterStatus: number = 0;

    
  constructor(color: string, waterAbsorb: number, waterStatus: number = 0, type: string){
  }


}

class Tree extends Plant {

  constructor(color?: string, waterAbsorb: number = 40, waterStatus: number = 0, type: string = "tree"){
    super(color, waterAbsorb, waterStatus, type);
  }
}

class Fower extends Plant {
  constructor(color: string, waterAbsorb: number = 70, waterStatus: number = 0, type: string = "flower"){
    super(color, waterAbsorb, waterStatus, type);
  }

}

