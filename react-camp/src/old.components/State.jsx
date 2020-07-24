/* import React, { Component } from 'react'

export default class State extends Component {
    constructor() {
        super();

        this.state = {
            number: 0
        }
    }

add(number) {
    this.setState({
        number: this.state.number + number
    });
}

    render() {
        return (
            <div>
                <h1> Hello World! Here's your number: {this.state.number} </h1>
                <br/>
                <button onClick={ () => this.add(1) }/>
                <button onClick={ () => this.add(-1) }/>
            </div>
        );
    }
}

export default State;

 */

import React from 'react'

export default function State() {
    const [ number, setNumber ] = React.useState(0);

    return (
        <div>
            Hello World!
        </div>
    );
}
