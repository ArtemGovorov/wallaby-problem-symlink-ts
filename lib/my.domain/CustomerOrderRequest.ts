import Name from "my.core/Name";


export default class CustomerOrderRequest
{
    private constructor(
        public readonly Name: Name       
    ){ 

    }    

    public static Create(name: string){
        let nameObj = new Name();
        nameObj.SimpleProperty = name;
        return new CustomerOrderRequest(nameObj);
    }
}