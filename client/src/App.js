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
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <li className="menu-list-link"><a className="menu-link" href="/">Posts</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/users">Users</a></li>
          <li className="menu-list-link"><a className="menu-link" href="/newpost">New Post</a></li>
        </header>
        <div className="App">
          <Router>
            <Route exact path="/" component={Posts} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/newpost" component={NewPost} />
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