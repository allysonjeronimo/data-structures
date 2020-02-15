
function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value)
            return i
    }
    return null
}

function binarySearch(array, value){
    let lowIndex = 0
    let hightIndex = array.length - 1

    while(lowIndex <= hightIndex){
        let midIndex = Math.floor((lowIndex + hightIndex) / 2)
        if(array[midIndex] === value){
            return midIndex
        }
        else if(array[midIndex] < value){
            lowIndex = midIndex + 1
        }
        else{
            hightIndex = midIndex - 1 
        }
    }

    return null
}

const utils = require('./utils')()

const array = utils.getFilledArray(100000000, true)

const value = 99999999
console.log(`Index of ${value}:`, binarySearch(array, value))