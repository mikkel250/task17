import React from 'react';
import logo from './pinterest_profile_image.png';
//import './App.css';
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <img src={logo} width={200} height={200} alt="" />
        <h3><Header name={name} isLoggedIn={loggedIn} /></h3>
        <About />
        <Product numbers={["Electronics", "Mobile Phones", "Data Loggers"]}/>
        <Profile />
      </div>
    )
   }
  
}

export default App;
