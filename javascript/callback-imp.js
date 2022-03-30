let myThbs = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve('thbs');
            }, 0);
    });

//console.log(myThbs)
myThbs.then(
    (success) => {
        console.log('i am in success promise ${success}');
    },
    (error) => {
        console.log('i am in reject promise ${error}');
    })