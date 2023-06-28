const fizzBuzz = require('./fizz-buzz');

describe('Curso Scrum - Fizz Buzz', () => {
    it('Retorna 1', () => {
        expect(fizzBuzz(1)).toEqual(1);
    })

    it('Retorna Fizz se o numero passado for multiplo de 3', () =>{
        expect(fizzBuzz(3)).toEqual('Fizz');
    })
})