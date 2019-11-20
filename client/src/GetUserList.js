import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class GetUserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }

  getUsers() {
    fetch("http://localhost:9000/user")
    .then(res => res.json())
    .then(res => this.setState({ users: res}))
    .catch(err => err);
  }

  
  responseTest() {
    fetch("http://localhost:9000/user").then((response) => {
      response.json().then((data) => {
        //console.log(data[1].user.username);
        console.log(data);
      });
  });
  }
 
  componentDidMount() {
    this.getUsers();
    this.responseTest();
  }

  render() {
    const data = Array.from(this.state.users);
    const userList = data.map((d) => <p>{d.username}</p>);
    return (
        <p>{userList}</p>
    );
  }

}

export default GetUserList;



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