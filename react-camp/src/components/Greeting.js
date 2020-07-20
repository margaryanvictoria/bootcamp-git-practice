import React from 'react'

/* function Greeting() {
    return <h1>Hello, World!</h1>;
} */

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>Greetings {this.props.name}</h1>
            </div>
        )
    }
}

export default Greeting
