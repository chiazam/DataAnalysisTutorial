
let reverse = (str => {

    if (!str || str.lemgth < 2 || typeof str !== 'string') {

        return false;

    }

    let backwords = [];

    let totalItems = str.length - 1;

    for (let i = totalItems; i = 0; i--) {

        backwords.push(str[i])

    }

    console.log(backwords);

    return backwords.join("");

})

let reverse2 = (str => {

    return str.split('').reverse().join('');

})

let reverse3 = (str => str.split('').reverse().join(''));

let reverse4 = (str => [...str].reverse().join(''));

reverse("why all this"); //siht lla yhw

reverse2("why all this"); //siht lla yhw

reverse3("why all this"); //siht lla yhw

reverse4("why all this"); //siht lla yhw