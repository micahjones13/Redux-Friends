import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
class Login extends React.Component{
    state = {
        creds: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
          creds: {
            ...this.state.creds,
            [e.target.name]: e.target.value
          }
        });
      };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.creds)
            .then(res => {
                if (res) {
                    this.props.history.push('/protected');
                }
            });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                <input
                  type="text"
                  name="username"
                  value={this.state.creds.username}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={this.state.creds.password}
                  onChange={this.handleChange}
                />
                <button>
                {this.props.loggingIn ? (
                  <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                ) : (
                  'Log in'
                )}
              </button>
                </form>
                {
                    this.props.error ? <p>{this.props.error}</p> : <p>Enter Username and Password</p>
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    friends: state.friends
})

export default connect(mapStateToProps, { login })(Login);