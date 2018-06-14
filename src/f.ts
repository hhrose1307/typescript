class Cat {
    static getNumberOfTail = 1;
}


function getCount() {
    return Promise.resolve(1);
}

getCount()
.then(x => console.log(x));




