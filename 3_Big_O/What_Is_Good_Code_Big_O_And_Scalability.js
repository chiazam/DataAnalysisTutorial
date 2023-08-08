const azamine = ['Azamine'];

const everyone = ['Emma', "Uche", "Cynthia", "Ozioma", "Caleb", "Joseph"];

const large = new Array(10000).fill('Azamine');

let findAzamine = (arr => {

    let t0 = performance.now();

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "Azamine") {

            console.log(`found ${arr[i]}!`);

        }

    }

    let t1 = performance.now();

    console.log(`Finding Azamine Took ${t1 - t0} Milisecond!`);

});

findAzamine(azamine);

findAzamine(everyone);

findAzamine(large);