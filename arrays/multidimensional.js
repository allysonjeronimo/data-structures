const matrix3x3x3 = []

for(let i = 0; i < 3; i++){
    matrix3x3x3[i] = []
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = []
        for(let k = 0; k < 3; k++){
            matrix3x3x3[i][j][k] = i + j + k
        }
    }
}

console.table(matrix3x3x3)

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        for(let k = 0; k < 3; k++){
            console.log(matrix3x3x3[i][j][k])
        }
    }
}

