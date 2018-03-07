'use strict';
import { Animal } from './02_zoo/zoo';

// Create a Flyable interface
//     it should have land, fly and takeOff methods (TakeOff in C#)
interface Flyable {
  land()
  fly()
  takeOff()
}
// Create an abstract Vehicle class
//     it should have at least 3 fields
abstract class Vehicle {
  name: string;
  quest: string;
  airSpeedVelocity: number;
}
// Extend Helicopter class from Vehicle
//     implement your Flyable interface
class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super()
  }
  land() {
  }
  fly() {
  }
  takeOff() {
  }
}
// Extend Bird from your abstract Animal class (zoo exercise)
//     implement yourˇFlyable interface
class Bird extends Animal implements Flyable {
  constructor(name) {
    super(name)
  }
  land() {
  }
  fly() {
  }
  takeOff() {
  }
}


