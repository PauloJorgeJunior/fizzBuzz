const fizzBuzz = require('./fizz-buzz');

function print() {
    for (i = 1; i <= 100; i++) {
        console.log(fizzBuzz(i))
    }
}

module.exports = print;