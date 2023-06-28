const Fizz = "Fizz";
const Buzz = "Buzz";

function fizzBuzz(num){
    if(num % 3 === 0) return Fizz;
    return num;
}

module.exports = fizzBuzz;