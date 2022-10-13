import logo from './logo.svg';
import './App.css';
import {Counter} from './components/counter';


import {Provider as ReduxProvider }from 'react-redux'
import {BankTransaction} from './components/bankTranasction'
import configureStore from './redux/configureStore';
import ListBooks from './components/books/listBooks';
import AddBook from './components/books/addBook';
import Home from './components/home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { BookDetail } from './components/books/bookdetail';
import  Header from './components/header'
import Navbar from './components/navigation';

//const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;
const store=configureStore();
function App() {
  return (
<> 
<Header> </Header>

<ReduxProvider store ={store} > 

<Router>
<Navbar></Navbar>
  <Routes> 
<Route path="/" element={<Home/>}/>
<Route path="/books" element ={<ListBooks/> }/>
<Route path ="/add" element ={<AddBook />} />
<Route path ="books/:id"  element ={<BookDetail />}/>
</Routes>
</Router>

</ReduxProvider>
</>
  );
}

export default App;
