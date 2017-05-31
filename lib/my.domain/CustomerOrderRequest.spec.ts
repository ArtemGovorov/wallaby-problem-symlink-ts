import {expect} from 'chai';
import CustomerOrderRequest from "./CustomerOrderRequest";

describe("CustomerOrderRequest", ()=>{
    it("should run the simple test", ()=>{      
        const sut = CustomerOrderRequest.Create('test');
        expect(sut.Name.SimpleProperty).to.equal('test'); 
        
    });
});