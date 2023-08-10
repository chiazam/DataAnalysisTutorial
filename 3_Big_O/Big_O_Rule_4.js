let printAllNumbersThenAllPairSums = (numbers => {

    console.log("these are the numbers:");

    numbers.forEach(numbers => {

        console.log(numbers);

    });

    console.log("these are the sums:");

    numbers.forEach(numbers => {

        secnumbers.forEach(secnumbers => {

            console.log(numbers + secnumbers);

        });

    });

});

// O(n^2)