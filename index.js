const divide = function() {
    return 2000 / 1000
};

const square = (parameter) => {
    return parameter * parameter;
};

const add = (parameter1, parameter2) => {
    return parameter1 + parameter2;
};

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
    };
  }

function returnsAnAnonymousFunction() {
    return function() {
    
    };
  }
