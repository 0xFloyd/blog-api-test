import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GetMessageList from "./GetMessageList"
import GetUserList from './GetUserList';
import Posts from "./posts";
import PostDetail from "./blogpost";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path="/" component={GetMessageList} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={PostDetail} />
          </Router>
        </header>
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