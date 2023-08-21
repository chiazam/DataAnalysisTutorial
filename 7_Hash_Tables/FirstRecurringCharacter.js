let firstRecurringCharacter = (input) => {

    for (let i = 0; i < input.length; i++) {

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] == input[j]) {

                return (input[i]);

            }

        }

    }

    return (undefined)

}//O(n^2)

let firstRecurringCharacter2 = (input) => {

    let map = {};

    for (let i = 0; i < input.length; i++) {

        if (map[input[i]] !== undefined) {

            return input[i];

        } else {

            map[input[i]] = i;
        }

    }

    return undefined;

}

firstRecurringCharacter([2, 3, 1, 2, 4, 5, 6, 7, 6, 8, 4]);