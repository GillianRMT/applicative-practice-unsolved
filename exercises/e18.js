/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

// import { data } from "../data/data.js";
import { maxBy } from "../exercises/e17.js";

// console.log(data.asteroids);

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let numberOfYears = data.asteroids.reduce((acc, asteroid) => {
    // console.log(Object.keys(acc).includes(asteroid.discoveryYear.toString()));
    if (Object.keys(acc).includes(asteroid.discoveryYear.toString())) {
      // console.log("if statement", acc[asteroid.discoveryYear]);
      acc[asteroid.discoveryYear] = acc[asteroid.discoveryYear] += 1;
    } else {
      // console.log("else statement", acc[asteroid.discoveryYear]);
      acc[asteroid.discoveryYear] = 1;
    }
    return acc;
  }, {});
  return Number(maxBy(Object.keys(numberOfYears), (key) => numberOfYears[key]));
}

// console.log(getGreatestDiscoveryYear());

// console.log(getGreatestDiscoveryYear(data));

// Object.keys(acc).includes(asteroid.discoveryYear)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
