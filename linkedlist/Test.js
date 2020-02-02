const LinkedList = require('./LinkedList')

const linkedList = new LinkedList()

linkedList.
    append(1).
    append(2)

console.log('Result:', linkedList.toString(true))

linkedList.reverse()

console.log('Result:', linkedList.toString(true))

