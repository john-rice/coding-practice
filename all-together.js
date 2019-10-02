const chores = [{
        name: 'Erase blackboard',
        doneBy: 'Jamal',
        minutes: 6
    },
    {
        name: 'Take the trash out',
        doneBy: 'Ashley',
        minutes: 3
    },
    {
        name: 'Sweep up',
        doneBy: 'Casey',
        minutes: 14
    },
    {
        name: 'Feed the guinea pig',
        doneBy: 'Jamal',
        minutes: 8
    },
]

let jamalsTasks = chores.filter( (chore) => {
    return chore.doneBy === 'Jamal'
} )

let jamalsTime = jamalsTasks.map( (task) => {
    return task.minutes
} ) 

let totalTime = jamalsTime.reduce( (total, time) => {
    return total + time
 }, 0 )

console.log( totalTime );


///// alternate condensed format



totalTime = chores.filter( (chore) => {
    return chore.doneBy === 'Jamal'
} ).map( (task) => {
    return task.minutes
} ).reduce( (total, time) => {
    return total + time
 }, 0 )

console.log( totalTime );