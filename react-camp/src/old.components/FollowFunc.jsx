import React from 'react'

export default function FollowFunc(props) {
    const showMessage  = () => {
        alert('Followed: ' + props.user);
    };

    const handleClick = () =>{
        setTimeout(showMessage, 3000);
    };

    return (
        <div>
            <button onClick={handleClick}> Follow </button>
            <label> (func) </label>
        </div>
    )
}
