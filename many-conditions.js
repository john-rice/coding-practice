
// build a bio

let name = 'Joe'
let role = 'Leader'
let knows = 'Mama'
let age = 35
let biography = ''

// condition 1
if (name === 'Joe') {
    biography = biography + 'This is Joe.'
}

// condition 2
if (role === 'Leader') {
    biography = biography + 'A leader.'    
}

// condition 3
if (knows === 'Mama') {
    biography = biography + 'Knows Mama.' 
}

// condition 4
if (age < 30) {
    biography = biography + 'Under 30.'
}

console.log(biography)