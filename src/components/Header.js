import React from 'react';

function Welcome(props) {
    return <>Welcome, {props.name}!</>
};

function SignUp(props) {
    return <>Welcome! Please <a href="#">sign up.</a></>
};

function Header(props) {
    if (props.isLoggedIn) {
        return <Welcome name={props.name} />;
    }
    return <SignUp />;
}

export default Header;
