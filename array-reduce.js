const lineup = [{
        id: 1,
        name: 'Chris Sale',
        position: 'P',
        teamId: 22,
        gameId: 123,
        salary: 9500
    },
    {
        id: 2,
        name: 'Bryce Harper',
        position: 'OF',
        teamId: 12,
        gameId: 119,
        salary: 3800
    },
    {
        id: 3,
        name: 'Mookie Betts',
        position: 'OF',
        teamId: 22,
        gameId: 123,
        salary: 3600
    },
]

console.log(lineup)

function calculateTotalSalary(players) {
    return players.reduce((total, player) => {
        return total + player.salary
    }, 0)
}

var result = calculateTotalSalary(lineup)

console.log(result)