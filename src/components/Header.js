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