import React from 'react'

/* function Greeting() {
    return <h1>Hello, World!</h1>;
} */

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>Greetings {this.props.name}, you are {props.age} years old.</h1>
                <button onClick={props.callback} > Click Me </button>
            </div>
        )
    }
}

export default Greeting;
