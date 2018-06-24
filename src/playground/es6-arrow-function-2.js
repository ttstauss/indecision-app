// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(55, 1, 1001))

// this keyword - no longer bound with arrow functions

const user = {
  name: 'Taylor',
  cities: ['Provo', 'Rexburg', 'Reno'],
  pringPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}

console.log(user.pringPlacesLived())

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())