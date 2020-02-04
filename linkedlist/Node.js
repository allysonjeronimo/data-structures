class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }

    toString(){
        return `${this.value}`
    }
}

module.exports = Node