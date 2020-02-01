const LinkedList = require('./LinkedList')

const linkedList = new LinkedList()

linkedList.printStructure = false

linkedList.
    append(1).
    append(2).
    append(3).
    prepend(0).
    prepend(-1).
    prepend(-2)

console.log('Result:', linkedList.toString())