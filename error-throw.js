
function addOne (numberToAddTo) {
    if (numberToAddTo === undefined) {
        throw new Error('You must provide a number to add to')
    }

    return numberToAddTo + 1
}

try {
    // failing to provide a number results in an error
    let result = addOne()
} catch (errorDetail) {
    console.log('Something is wrong - ' + errorDetail.message)
}
    
