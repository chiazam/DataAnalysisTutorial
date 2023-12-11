let myLinkedList={

    head:{
        value:10,
        next:{
            value:5,
            next:{
                value:16,
                next:NULL
            }
        }
    }

}

class LinkedList{

    constructor(value){

        this.head={
            value:value,
            next:null
        }

        this.tail=this.head;
        this.length=1;

    }

    append(value){

        const newNode={
            value:value,
            next:null
        }

        this.tail.next=newNode;

        this.tail=newNode;

        length++;

        return this;

    }

    prepend(value){

        const newNode={
            value:value,
            next:null
        }

        newNode.next=this.head;

        this.head=newNode;

        length++;

        return this;

    }

}

const deLinkedList= new LinkedList(10);
deLinkedList.append(5);
deLinkedList.append(16);
deLinkedList.prepend(1);
deLinkedList.prepend(3);
console.log(deLinkedList);