class MyArr {

    constructor() {

        this.length = 0;

        this.data = {};

    }

    get(index) {

        return this.data[index]

    }

    push(item) {

        this.data[this.length] = item;

        this.length++

        return this.length;

    }

    pop() {

        let lastItem = this.data[this.length - 1];

        delete (this.data[this.length - 1]);

        this.length--;

        return lastItem;

    }

    delete(index) {

        let item = this.data[index];

        this.shiftItems(index);

        // delete (this.data[this.length - 1]);

        // this.length--;

        // return lastItem;

    }

    shiftItems(index) {

        for (let i = index; i < this.length; i++) {

            this.data[i] = this.data[i + 1];

        }

        this.pop();

    }

}

const newArr = new MyArr();

newArr.push("y");
newArr.push("7");
newArr.push("!");

newArr.get(0);//y
newArr.get(1);//7

newArr.pop();//!