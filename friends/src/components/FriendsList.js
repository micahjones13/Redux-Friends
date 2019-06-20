import React from 'react';
import Friend from './Friend';
import { connect } from 'react-redux';
import { getData, addFriendAction, deleteFriendAction } from '../actions';

class FriendsList extends React.Component {


    state ={
        friend: {
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        this.props.getData();
    }

    handleChange = e => {
        e.persist();
        e.preventDefault();
        this.setState( prevState => ({
          friend: {
            ...prevState.friend,
            [e.target.name]: e.target.value
          }
        }));
      };

      addFriend = e => {
          e.preventDefault();
          this.props.addFriendAction(this.state.friend);
      }

      deleteFriend = (e, id) => {
          e.preventDefault();
        this.props.deleteFriendAction(id);
      }

    render(){
        return (
            <div>
                <h1>Firend List</h1>
                {
                    this.props.friends.map(friend => {
                    return(
                        <Friend
                            key = {friend.id}
                            friend = {friend}
                            deleteFriend = {this.deleteFriend}
                        />
                    )
                  })
                }
                <form onSubmit = {this.addFriend}>
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder = 'name'
                />
                <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                placeholder = 'age'
                />
                <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder = 'email'
              />
              <button>Add Friend</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error,
    savingFriends: state.savingFriends
});

export default connect(mapStateToProps, { getData, addFriendAction, deleteFriendAction })(FriendsList) 
