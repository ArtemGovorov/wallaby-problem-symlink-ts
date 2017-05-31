import {expect} from 'chai';
import Name from "./Name";

describe("Name", ()=>{
    it("should run the simple test", ()=>{      
        let sut = new Name();
        sut.SimpleProperty = 'one'
        expect(sut.SimpleProperty).to.equal('one'); 
        
    });
});