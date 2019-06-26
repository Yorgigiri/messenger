import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("./data/users.json").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div class="users">
        <div class="users-list">
          {this.state.users.map((user, index) => (
            <div class="users-list__element" key={index}>
              {user.name} {user.surname}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
