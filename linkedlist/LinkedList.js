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
                let current = this.head
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

    find(value){
        if(!this.head)
            return
        
        let current = this.head

        while(current){
            if(current.value === value)
                return current
            current = current.next
        }

        return null
    }

    reverse(){
        
        if(!this.head || this.head == this.tail)
            return

        let previous = null    
        let current = this.head
        let next = current.next

        while(current){

            current.next = previous

            previous = current
            current = next

            if(next)
                next = next.next
        }

        this.tail = this.head
        this.head = previous
    }

    toString(printStructure = false){
        let current = this.head
        let result = ''
        while(current !== null){
            
            // print head
            if(current == this.head && printStructure){
                result += 'H-->'
            }

            result += `[${current.toString()}]`

            // print next arrow?

            if(printStructure && current.next){
                result += '-->'
            }
            
            // print tail
            if(current == this.tail && printStructure){
                result += '<--T'
            }

            current = current.next
        }


        return result
    }
}