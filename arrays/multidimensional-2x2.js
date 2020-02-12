const activities = [
    ['Work', 8],
    ['Study', 3],
    ['Sleep', 6],
    ['Workout', 1],
    ['Commute', 2],
    ['Eat', 2],
    ['Other', 2]
]

console.table(activities)

for (let i = 0; i < activities.length; i++) {
    let percentage = ((activities[i][1] / 24) * 100).toFixed(2)
    activities[i].push(percentage + '%')
}

console.table(activities)

for(let i = 0; i < activities.length; i++){
    let innerArrayLength = activities[i].length
    for(j = 0; j < innerArrayLength; j++){
        console.log(`[${i},${j}] = ${activities[i][j]}`)
    }
}