const utils = require('./utils')()

function insertionSort(array){
    let current
    for(let i = 1; i < array.length; i++){
        current = array[i]
        let j = i - 1
        while(j >= 0 && current < array[j]){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current
    }
}

const array = utils.getFilledArray(10, false)

console.log(array)

insertionSort(array)

console.log(array)

