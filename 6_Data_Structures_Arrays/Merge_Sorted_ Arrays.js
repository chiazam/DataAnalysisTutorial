let mergeSortedArray = (arr1, arr2) => {



    mergedArr = [];

    if (arr1.length == 0) {

        return arr2;

    } else if (arr2.length == 0) {

        return arr1;

    }

    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    while (arr1Item || arr2Item) {

        if (!arr2Item || arr1Item < arr2Item) {

            mergedArr.push(arr1Item);

            arr1Item = arr1[i];

            i++

        } else {

            mergedArr.push(arr2Item);

            arr2Item = arr2[i];

            j++

        }

    }

    return mergedArr;

}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);