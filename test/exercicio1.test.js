const {somar} = require('../service/exercicio1')
const {describe, it, expect} = require('@jest/globals')

describe('Testes da função somar: ', () => {
    // faz os its (testes)

    it('Somar dois números positivos', () => {
        const resultado = somar(1,2);

        // console.log(resultado)
        expect(resultado).toBe(3)
    })
})
