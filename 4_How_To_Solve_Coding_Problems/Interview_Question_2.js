
let ar1 = ["a", "b", "c", "x"];

let ar2 = ["z", "y", "x"];

let ar3 = ["z", "y", "f"];

let containCommonItems2 = (arr1, arr2) => {

    let map = {};

    for (let i = 0; i < arr1.length; i++) {

        if (!map[i]) {

            let item = arr1[i];

            map[item] = true;
        }

    }

    for (let j = 0; j < arr2.length; j++) {

        if (map[arr2[j]]) {

            return true;

        }

    }

} // O(n^2)

containCommonItems2(ar1, ar2); // true

containCommonItems2(ar1, ar3); // false