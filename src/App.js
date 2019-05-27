import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Product from './components/Product';

const loggedIn = true;
const name = 'Valerie';

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <Header name={name} isLoggedIn={loggedIn} />
        <About />
        <Product />
        <Profile />
      </div>
    )
   }
  
}

export default App;
