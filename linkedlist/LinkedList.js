const Node = require('./Node')

module.exports = class LinkedList{

    printStructure = false

    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(value){
        const newNode = new Node(value, this.head)
        this.head = newNode

        if(!this.tail)
            this.tail = newNode

        return this
    }

    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }

        return this
    }

    delete(value){
        if(this.head){
            if(this.head.value === value){ 
                if(this.head == this.tail){
                    this.head = null
                    this.tail =  null
                }
                else{
                    this.head = this.head.next
                }
            }
            else{
                const current = this.head
                while(current.next){
                    if(current.next.value === value){

                        const toDelete = current.next
                        current.next = toDelete.next

                        // update tail
                        if(toDelete == this.tail){
                            this.tail = current
                        }

                        return
                    }
                    else{
                        current = current.next
                    }
                }
            }
        }
    }

    reverser(){
        
    }

    toString(){
        let current = this.head
        let result = ''
        while(current !== null){
            
            // print head
            if(current == this.head && this.printStructure){
                result += 'H-->'
            }

            result += `[${current.toString()}]`

            // print next arrow?

            if(this.printStructure && current.next){
                result += '-->'
            }
            
            // print tail
            if(current == this.tail && this.printStructure){
                result += '<--T'
            }

            current = current.next
        }


        return result
    }
}