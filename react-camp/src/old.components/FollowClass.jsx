import React, { Component } from 'react'

export default class FollowClass extends Component {
    constructor(props) {
        super(props);
    }

    showMessage = (user) => {
        alert('Followed ' + user);
    };

    handleClick = () => {
        //after 3 seconds, show our message
        const user = this.props.user;

        setTimeout(() => {
            this.showMessage(user);
        }, 3000);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Follow </button>
                <label> (class) </label>
            </div>
        )
    }
}
