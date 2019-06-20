import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to = '/login'>Login</Link>
        <Link to = '/protected'>Protected</Link>
        <Route path = '/login' component = { Login } />
        <PrivateRoute exact path = '/protected' component = {FriendsList} />
      </div>
    </Router>
  );
}

export default App;
