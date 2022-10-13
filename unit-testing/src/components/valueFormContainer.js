import { render } from "@testing-library/react"
import { Component } from "react";
import { Result } from "./result"
import { ValueInput } from "./valueInput"

export default class ValueFormComponent  extends Component{

    constructor(props){
        super(props) ;
            this.state ={
                title :this.props.title || "Simple Addition",
                fieldValues:[],
                total : 0
            }
        }

        updateTotal = () => {
            this.setState(state  => ( {
                total : state.fieldValues.reduce((total,val) => total+=val ,0)
            }))
        }

        updateFieldValue = (id,value) => {
            this.setState(state => {
                state.fieldValues[id] =Number(value) ;
                return state ;
            }) ;
        }

        render(){
            return <div className="container m-2 p-2">
                <h5>{this.state.title}</h5>
                <Result result ={this.state.total}></Result>
                <ValueInput id="1"   changeCallback ={this.updateFieldValue}/>
                <ValueInput id="2"   changeCallback ={this.updateFieldValue}/>
                <ValueInput id="3"   changeCallback ={this.updateFieldValue}/>

                <button className="btn btn-secondary" onClick={this.updateTotal}> Total </button>
            </div>
        }
    }
