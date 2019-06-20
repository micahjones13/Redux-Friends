import React from 'react';

const Friend = (props) => {
    return (
        <div>
        
            
        
        <p>{props.friend.name}</p>
        <button onClick = {e => props.deleteFriend(e, props.friend.id)}>Delete</button>
        </div>
    )
}

export default Friend;

// {e => props.deleteFriend(e, props.friend.id)}