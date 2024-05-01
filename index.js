function receivesAFunction(callback) {
    console.log("CallBack");
    return callback();
}

function returnsANamedFunction() {
     function namedFunction() {
        console.log("Named Fucntion")

    }

    return namedFunction;
}

function  returnsAnAnonymousFunction() {
    console.log("A function w/out a name.")
    
    return function () {

    }
    
}

