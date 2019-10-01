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

function getPositionCounts(players) {
    return players.reduce((table, player) => {
        // if this position is not being grouped yet, add it and default it's value to 0
        // computer brain should see this as  table.P and table.OF for example
        if (!table[player.position]) {
            // computer brain should see the position value in place of the property
            // for example table.P = 0 and also table.OF = 0
            table[player.position] = 0
        }

        // increment the count of players at this position
        table[player.position] = table[player.position] + 1

        return table

        // below we start the table out as {} as an empty object
    }, {})
}


let result = getPositionCounts(lineup)

console.log(result)