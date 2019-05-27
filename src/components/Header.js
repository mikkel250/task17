import React from 'react';

function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>
};

function SignUp(props) {
    return <h1>Welcome! Please <a href="#">sign up.</a></h1>
};

function Greeting(props) {
    if (props.isLoggedIn) {
        return <Welcome />;
    }
    return <SignUp />;
}

function Header(props) {
    return (<header className='App-header'><h1>{Greeting}</h1></header>)
}

export default Header;
