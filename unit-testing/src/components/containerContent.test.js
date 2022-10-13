import React from 'react' 
import Adapter from "@chalbert/enzyme-adapter-react-18"
import Enzyme, {shallow,mount} from "enzyme" 
import { ValidationMap } from 'react'
import { ValueInput } from './valueInput'
import ValueFormComponent from './valueFormContainer'

//Shallow rendering isolates component fromits children , test on its own

Enzyme.configure({adapter : new Adapter()}) ;

xit("Renders three ValueInputs" , () =>{
    const wrapper = shallow(<ValueFormComponent />) ;
    const valCount = wrapper.find(ValueInput).length ;
    expect(valCount).toBe(3) ;
})

xit("Fully renders three inputs" , () => {
    const wrapper =mount(<ValueFormComponent title="Tester" />);
    const count = wrapper.find("input.form-control").length ;
    expect(count).toBe(3) ;
})

xit("Fully renders three inputs" , () => {
    const wrapper =shallow(<ValueFormComponent  />);
    const count = wrapper.find("input.form-control").length ;
    expect(count).toBe(0) ;
})

xit("uses title prop", () => {
    const titleVal ="test title"

    const wrapper =shallow(<ValueFormComponent  title={titleVal} />);
const firstTitle =wrapper.find("h5").text();
const stateValue=wrapper.state("title");
expect(firstTitle).toBe(titleVal);
expect(stateValue).toBe(titleVal)

})

it("update method updates state data 'total' ", () => {
    //Arrange
 const wrapper = shallow(<ValueFormComponent />);
 const values = [10, 20, 30];
 values.forEach((val, index) =>
 wrapper.instance().updateFieldValue(index + 1, val));
 wrapper.instance().updateTotal();
 expect(wrapper.state("total")).toBe(60);
 //.toBe(values.reduce((total, val) => total + val), 0);
})

it("update  'total'  when button is clicked", () => {

    const wrapper = shallow(<ValueFormComponent />);
    const button = wrapper.find("button").first() ;
    const values = [10, 20, 30];

    values.forEach((val, index) =>
    wrapper.instance().updateFieldValue(index + 1, val));

    button.simulate("click") ;

    expect(wrapper.state("total")).toBe(60);

})


it('child function prop updates state', () => {
    const wrapper = mount(<ValueFormComponent />) 
    const valInput = wrapper.find(ValueInput).first() ;
    const inputElem = valInput.find("input").first() ;

    inputElem.simulate("change" , {target:{value:"100"}})  ;

    const button = wrapper.find("button").first() ;
    button.simulate("click") ;

    

    expect(valInput.state("fieldValue")).toBe("100") ;
    expect(wrapper.state("total")).toBe(100) ;


})







