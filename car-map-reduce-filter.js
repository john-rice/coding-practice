
let cars = [ { 
    make: 'chevy',
    model: 'volt',
    year: 2012
}, {
    make: 'tesla',
    model: '3',
    year: 2019
}, {
    make: 'ford',
    model: 'fusion',
    year: 2012
} ]

let oldCars = cars.filter( (car) => {
    return car.year < 2019
} )

// return an object for each car that includes the existing data as well 
//  as a single full string property named `display`
// for example '2012 ford fusion'
let displayData = oldCars.map( (car) => {
    let result = car
    result.display = car.year + ' ' + car.make + ' ' + car.model
    return result
})  

console.log( displayData )