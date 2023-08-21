class HashTable {

    constructor(size) {

        this.data = new Array(size);

    }

    _hash(key) {

        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            const element = key[i];

            hash = (hash + key.charCodeAt(i) * i) % this.data.length

        }

        return hash;

    }

    set(key, value) {

        let address = this._hash(key);

        if (!this.data[address]) {

            this.data[address] = [];

        }

        this.data[address].push([key, value]);

    }

    set(key) {

        let address = this._hash(key);

        let currentbucket = this.data[address];

        if (currentbucket) {

            for (let i = 0; i < currentbucket.length; i++) {

                if (currentbucket[i][0] == key) {

                    return currentbucket[i][1];

                }

            }

        }

        return undefined;


    }

}

let hasher = new HashTable(50);

hasher.set("grapes", 1000);
hasher.set("apples", 1000);

hasher.get("grapes");

