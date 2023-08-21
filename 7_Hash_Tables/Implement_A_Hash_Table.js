class HashTable {

    constructor(size) {

        this.data = new Array(size);

    }

    _hash(key) {

        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            const element = key[i];

            hash = (hash + key.charCodeAt(i) * i) %;

            this.data.length

        }

        return hash;

    }


}

let hasher = new HashTable(50);

hasher.set("grapes", 1000);

hasher.get("grapes");

