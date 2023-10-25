import React from 'react';
import axios from 'axios';

export default class Delete extends React.Component {
  state = {
    username: 'dhicks6'
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  
    if(!this.state.username) {
      alert("Username cannot be empty");
      return;
    }
  
    const encodedUsername = encodeURIComponent(this.state.username);
    axios.delete(`http://localhost:8000/users/{username}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="username" name="username" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}