
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

    str.split('').reverse().join('');

})

reverse("why all this"); //siht lla yhw

reverse2("why all this"); //siht lla yhw