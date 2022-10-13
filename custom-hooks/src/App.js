import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { ComponentA } from './components/contextApiDemo/componentA';
import { ComponentC} from './components/contextApiDemo/componentC';
import { ComponentD} from './components/contextApiDemo/componentD';
import ShippingAddress from './components/customHooks/ShippingAddress'
import  UserNameForm from './components/customHooks/UserNameForm' ;

import  CounterComponent  from './components/customHooks/counterComponent';

import React from 'react';

export const NameContext =React.createContext();
export const ColorContext =React.createContext();

function App() {
  return (
  
   <UserNameForm />

   

  );
}

export default App;




