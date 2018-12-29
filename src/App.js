import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

class App extends Component {

  state = {
    users: []
  }

  componentDidMount =()=>{
    getUsers().then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user=>
            <li>{user.name}</li>            
          )}
        </ul>
      </div>
    );
  }
}

export default App;
