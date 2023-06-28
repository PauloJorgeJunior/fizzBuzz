const fizzBuzz = require('./fizz-buzz');

describe('Curso Scrum - Fizz Buzz', () => {
    it('Retorna o numero informado', () => {
        expect(fizzBuzz(1)).toEqual(1);
    })

    it('Retorna Fizz se o numero passado for multiplo de 3', () =>{
        expect(fizzBuzz(3)).toEqual('Fizz');
    })

    it('Retorna Buzz se o numero for multiplo de 5', () =>{
        expect(fizzBuzz(5)).toEqual('Buzz');
    })
})