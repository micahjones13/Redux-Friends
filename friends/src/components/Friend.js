import React from 'react';

const Friend = (props) => {
    return (
        <div>
        <p>{props.friend.name}</p>
        <button>Delete</button>
        </div>
    )
}

export default Friend;