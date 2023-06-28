const Fizz = "Fizz";
const Buzz = "Buzz";

function fizzBuzz(num) {
    let text = '';
    if (num % 3 === 0) text += Fizz;
    if (num % 5 === 0) text += Buzz;
    return text === '' ? num : text;
}

module.exports = fizzBuzz;