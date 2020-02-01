const Node = require('./Node')

module.exports = class LinkedList{

    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(value){
        const newNode = new Node(value, this.head)
        this.head = newNode

        if(!this.tail)
            this.tail = newNode
    }

    append(value){

    }

    delete(value){

    }

    reverser(){
        
    }

    toString(){
        let current = this.head
        let result = ''
        while(current !== null){
            result += `[${current.toString()}]`
            current = current.next
        }
        return result
    }
}