

let followers = ['Obama', 'Trump', 'Clinton']

function listFollowers(showAll, followerIndex) {
    if (showAll) {
        console.log(followers)
    } else {
        console.log( followers[followerIndex])
    }
}

// listFollowers(true)
// listFollowers(false, 2)

function listFollowersSimple(showAll, followerIndex) {
    showAll? console.log(followers) : console.log( followers[followerIndex])
}

listFollowersSimple(true)
listFollowersSimple(false, 2)

