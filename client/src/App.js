import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import GetMessageList from "./GetMessageList"
//import GetUserList from './GetUserList';
import Posts from "./posts";
import Users from "./users";
import PostDetail from "./postdetail";
import UserDetail from "./userdetail";
import NewPost from "./newpost";
import Signup from "./signup";
import Login from "./login";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import header from "./header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <div className="site-brand">
             <li className="menu-list-link"><a className="menu-link" href="/">Home</a></li>
          </div>
          <li className="menu-list-link"><a className="menu-link" href="/">Posts</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/user">Users</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/user/signup">Sign Up</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/user/login">Log In</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/message/newpost">New Post</a></li>
        </header>
        <div className="App">
          <Router>
            <Route exact path="/" component={Posts} />
            <Route exact path="/user" component={Users} />
            <Route exact path="/message/newpost" component={NewPost} />
            <Route exact path="/user/signup" component={Signup} />
            <Route exact path="/user/login" component={Login} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/users/:id" component={UserDetail} />
          </Router>
        </div>
      </div>
    );
  }

}

export default App;



/* 

fetch('http://localhost:4000/upload', {
method: 'POST',
body: data
}).then(response => {
response.json().then(body => {
this.setState({ imageURL: `http://localhost:4000/${body.file}` });
});
});
}

*/