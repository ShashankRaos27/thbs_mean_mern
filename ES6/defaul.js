function calNumbers(n1, n2, n3, n4) {

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);

    if (n3 == undefined) {
        n3 = 10;
    }

    if (n4 == undefined) {
        n4 = 4;
    }

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;
}

calNumbers(1, 2);

/**
 * ES 6 Feature we can assing default to function param
 */

function calNumbers(n1, n2, n3 = 10, n4 = 4) {

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);

    // if(n3 == undefined) {
    //     n3 = 10;
    // }

    // if(n4 == undefined) {
    //     n4 = 4;
    // }

    console.log(`
    N1 = ${n1}
    N2 = ${n2}
    N3 = ${n3}
    N4 = ${n4}
    `);
    return n1 + n2 + n3 + n4;
}

calNumbers(1, 2, 3, 5);
