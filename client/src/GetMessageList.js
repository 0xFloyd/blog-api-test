import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GetUserList from './GetUserList';
import { Link } from "react-router-dom";


class GetMessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: '' };
  }

  getMessages() {
    fetch("http://localhost:9000/message")
    .then(res => res.json())
    .then(res => this.setState({ messages: res}))
    .catch(err => err);
  }

  
  responseTest() {
    fetch("http://localhost:9000/message").then((response) => {
      response.json().then((data) => {
        //console.log(data[1].user.username);
        //console.log(data);
      });
    });
  }
 
  componentDidMount() {
    this.getMessages();
    this.responseTest();
  }

  render() {
    const data = Array.from(this.state.messages);
    const messageList = data.map((d) => <p><a href={`http://localhost:9000/message/${d._id}`}>{d.text}</a> by {d.user.username}</p>);
    return (
        <div>
          <div className="App-intro">{messageList}</div>
          <GetUserList></GetUserList>
          <Link to= "/post">
            <li>Post</li>
          </Link>
      </div>
    );
  }

}

export default GetMessageList;



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