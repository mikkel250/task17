import React from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit - this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Profile Updated');
    }

    render() {
        return (
            <label>Name:
                <input type='text' value={this.state.value} onChange={this.handleChange}></input>
            </label>
        )
    }
}

export default Profile;