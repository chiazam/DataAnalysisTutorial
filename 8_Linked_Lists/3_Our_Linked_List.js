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

    insert(index, value){

        if(index>=this.length){

            return this.append(value);

        }

        const newNode={
            value:value,
            next:null
        }

        const leader = this.transverseToIndex(index-1);

        let holdPointer= leader.next;

        leader.next = newNode;

        newNode=holdPointer;

        this.length++

        return this.printList;

    }

    remove(index){

        const leader = this.transverseToIndex(index-1);

        const unwantedNode=leader.next;

        leader.next=unwantedNode;

        this.length--;
        
        return this.printList;

    }

    transverseToIndex(index){

        let counter = 0;

        let currNode=this.head;

        while (counter!=index) {

            currNode=currNode.next;
            
        }

        return currNode;

    }

    printList(){

        const arr=[];

        let currNode=this.head;

        while (currNode!==null) {

            arr.push(currNode);

            currNode=currNode.next;
            
        }

        return arr;

    }

}

const deLinkedList= new LinkedList(10);
deLinkedList.append(5);
deLinkedList.append(16);
deLinkedList.prepend(1);
deLinkedList.prepend(3);
deLinkedList.insert(3,12);
deLinkedList.remove(5);
console.log(deLinkedList);
deLinkedList.printList;