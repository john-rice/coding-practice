
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

console.log( oldCars )