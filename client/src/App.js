import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import GetMessageList from "./GetMessageList"
//import GetUserList from './GetUserList';
import Posts from "./posts";
import Users from "./users";
import PostDetail from "./postdetail";
import UserDetail from "./userdetail";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <li className="menu-link"><a href="/">Posts</a></li>
          <li className="menu-link"><a href="/users">Users</a></li>
        </header>
        <Router>
          <Route exact path="/" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/users/:id" component={UserDetail} />
        </Router>
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