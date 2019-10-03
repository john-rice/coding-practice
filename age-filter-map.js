// provide the ages as objects and include the message such as
// '18 is old enough to buy lottery'
let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// filter
let oldEnough = ages.filter( (age) => {
    return age >= 18
})

console.log(oldEnough)

// map
let info = oldEnough.map( (age) => {
    return {
        age: age,
        display: `${age} is old enough to by lotto`
    }
} )

console.log(info)


// same code but chained

info = ages.filter( (age) => {
    return age >= 18
}).map( (age) => {
    return {
        age: age,
        display: `${age} is old enough to by lotto`
    }
} )

console.log(info)
