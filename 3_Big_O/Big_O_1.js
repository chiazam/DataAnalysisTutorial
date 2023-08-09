const azamine = ['Azamine'];

const everyone = ['Emma', "Uche", "Cynthia", "Ozioma", "Caleb", "Joseph"];

const large = new Array(10000).fill('Azamine');

let findpos0 = (arr => {

    let t0 = performance.now();

    console.log(arr[0]);

    let t1 = performance.now();

    console.log(`Finding ${arr[0]} Took ${t1 - t0} Milisecond!`);

});

findpos0(azamine);

findpos0(everyone);

findpos0(large);