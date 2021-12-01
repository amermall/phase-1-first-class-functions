// 1. 
// receivesAFunction(callback)
// receives a function and calls it:
// ReferenceError: receivesAFunction is not defined

function receivesAFunction(callback) {
    return callback();
}

// 2.
// returnsANamedFunction()
// "before all" hook:
// ReferenceError: returnsANamedFunction is not defined
function returnsANamedFunction() {
    return returnsANamedFunction;
}

// 3.
// returnsAnAnonymousFunction()
// "before all" hook:
// ReferenceError: returnsAnAnonymousFunction is not defined
function returnsAnAnonymousFunction() {
    // returnsAnAnonymousFunction
    return function(){};
}