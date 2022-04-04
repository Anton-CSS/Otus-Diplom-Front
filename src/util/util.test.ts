import {formDate} from './util';

describe('formDate', () =>{
    it('formDate is Function', () =>{
        expect(formDate).toBeInstanceOf(Function);
    });

    it('formDate returns a string', () =>{
        const result = formDate(new Date())
        expect(typeof result).toBe('string');
    });

    it('formDate returns correct answer', () =>{
        const date = new Date("2017-01-26");
        const result = formDate(date)
        expect( result).toBe('2017.01.26');
    });
})