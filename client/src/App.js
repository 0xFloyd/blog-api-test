import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }

  callAPI() {
    fetch("http://localhost:9000/user")
    .then(res => res.json())
    .then(res => this.setState({ users: res}))
    .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const data = Array.from(this.state.users);
    const userList = data.map((d) => <li key={d.username}>{d.username}</li>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{userList}</p>
        </header>
      </div>
    );
  }

}

export default App;
