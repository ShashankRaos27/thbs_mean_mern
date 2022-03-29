let myThbs = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                reject('thbs');
            }, 
            2000
            );
    }
);

myThbs.then(
    (success) => {
        console.log(`i am in success promise ${success}`);
    },
    (error) => {
        console.log(`i am in reject promise ${error}`);
    }
)
    .then((sval) => {
        console.log(`i im in success chain ${sval}`);
    },
        (errorVal) => {
            console.log(`i am in then error chain ${errorVal}`);
        })