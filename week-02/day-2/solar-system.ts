
'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

let missingPlanet: string = 'Saturn';
let missingPlanetPos: number = 5;

function putSaturn (planet: string, position: number){
  planetList.splice(position, 0, planet);
  return planetList;
  }
console.log(putSaturn(missingPlanet, missingPlanetPos));
