// build a bio for leaders over 30

let name = 'Joe'
let role = 'Leader'
let knows = 'Coding'
let age = 35
let biography = ''

function buildBiography () {
    let bio = 'An over 30 leader.'

    // condition 2
    if (name === 'Joe') {
        bio = bio + 'This is Joe.'    
    }

    // condition 3
    if (knows === 'Coding') {
        bio = bio + 'Knows how to code.' 
    }

    return bio
}

// condition 1
if (age > 30 && role === 'Leader') {
  biography = buildBiography()
}

console.log(biography)