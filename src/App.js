import React, { Component } from 'react';
import './App.css';
import ViewUser from "./components/ViewUser";
import {getUsers} from "./Api/Users";

class App extends Component {

  state = {
    users: [],
    user: {}
  }

  componentDidMount =()=>{
    getUsers().then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  setActive = (user) => {
    this.setState({'user': user});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user=>
            <li key={user.id}>
              {user.name} {' '}
              <button onClick={()=>this.setActive(user)}>View</button>
            </li>
          )}
        </ul>
        <div>
          <h3>User Details</h3>
          {this.state.user.id > 0 ? 
            <ViewUser user={this.state.user} />
            : 'please select a user'
          }
        </div>
      </div>
    );
  }
}

export default App;
