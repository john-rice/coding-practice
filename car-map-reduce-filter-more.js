
let carsForSale = [ { 
    make: 'chevy',
    model: 'volt',
    year: 2012
}, { 
    make: 'chevy',
    model: 'volt',
    year: 2013
}, { 
    make: 'chevy',
    model: 'equinox',
    year: 2013
} , {
    make: 'tesla',
    model: 'model 3',
    year: 2019
} , {
    make: 'tesla',
    model: 'model 7',
    year: 2020
}, {
    make: 'ford',
    model: 'fusion',
    year: 2012
} ]

let saleOpportunity = {
    make: 'chevy',
    model: 'volt',
    year: 2012
}

let oldCars = carsForSale.filter( (car) => {
    return car.year < 2019
} )

let typeMatches = carsForSale.filter( (car) => {
    return car.make === saleOpportunity.make
} )

console.log({typeMatches})

let fullMatches = carsForSale.filter( (car) => {
    return car.make === saleOpportunity.make && car.model === saleOpportunity.model && car.year === saleOpportunity.year
} )

console.log({fullMatches})


let afterSoldInventory = carsForSale.filter( (car) => {
    return !(car.make === saleOpportunity.make && car.model === saleOpportunity.model && car.year === saleOpportunity.year)
} )

console.log({afterSoldInventory})
