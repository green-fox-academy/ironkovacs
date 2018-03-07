'use strict';

class Plant {
  type: string;
  color: string;
  waterAbsorb: number;
  waterStatus: number = 0;
  criticalWater: number;

  needsWater(): boolean {
    return (this.waterStatus < this.criticalWater)
  }

  getPlantStatus(): string {
    if (this.needsWater() === true) {
      return `The ${this.color} ${this.type} needs water`
    } else {
      return `The ${this.color} ${this.type} doesnt need water`
    }
  }
  constructor(type: string, color: string, waterAbsorb: number, criticalWater: number, waterStatus: number = 0) {
  }
}

class Garden extends Plant {
  name: string;
  plants: Plant[] = [];

  addPlant(type, color): Plant[] {
    switch (type) {
      case 'flower':
        this.plants.push(new Plant(type, color, 40, 5, 0));
        break;
      case 'tree':
        this.plants.push(new Plant(type, color, 70, 10, 0));
        break;
      default:
        this.plants.push(new Plant(type, color, 0, 0, 0));
    }
    return this.plants;
  }
  getPlantList(){
    return this.plants;
  }
  watering(amount: number) {
    let amountPerPlant = amount / Garden.length;
    this.waterStatus += amountPerPlant*(this.waterAbsorb/100);

  }
  getWateringStatus() {

  }
  constructor(type: string, color: string, waterAbsorb: number, criticalWater: number, waterStatus: number = 0, plants: Plant[]) {
    super(type, color, waterAbsorb, criticalWater, waterStatus);

  }

}
Garden.addPlant()