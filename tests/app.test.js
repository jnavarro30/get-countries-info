const expect = require('chai').expect;
const getCountriesInfo = require('../app');

describe('getCountriesInfo', () => {
    it('Should return a country name', () => {
        const actual = getCountriesInfo('italy');
        const expected = 'Italy';
        expect(actual).to.equal(expected);
    })
})