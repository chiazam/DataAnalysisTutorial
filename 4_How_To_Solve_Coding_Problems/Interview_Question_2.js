
let ar1 = ["a", "b", "c", "x"];

let ar2 = ["z", "y", "x"];

let ar3 = ["z", "y", "f"];

let containCommonItems2 = (arr) => {

    let map = {};

    for (let i = 0; i < arr.length; i++) {

        if (!map[i]) {

            let item = ar2[i];

            map[item] = true;
        }

    }

    for (let j = 0; j < ar2.length; j++) {

        if (map[ar2[j]]) {

            return true;

        }

    }

} // O(n^2)

containCommonItems2(ar1); // true

let containCommonItems3 = (arr1, arr2) => {

    return arr1.some(item => (arr2.include(item)));

} // O(n^2)