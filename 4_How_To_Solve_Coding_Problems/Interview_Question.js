
let ar1 = ["a", "b", "c", "x"];

let ar2 = ["z", "y", "x"];

let ar3 = ["z", "y", "f"];

let containCommonItems = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]) {

                return true;

            }

        }

    }

    return false;

} // O(n^2)

containCommonItems(ar1, ar2); // true

containCommonItems(ar1, ar3); // false