import React from "react";
import axios from "axios";
import "./Users.scss";

class Users extends React.Component {
  state = {
    users: [],
    users_info: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get("./data/users.json").then(res => {
      const users = res.data;

      this.setState({ users });
    });
    axios.get("./data/users_info.json").then(res => {
      const users_info = res.data;

      this.setState({ users_info });
    });
  }

  render() {
    return (
      <div className="users">
        <div className="users-list">
          {this.state.users.map((user, index) => (
            <div
              className="users-list__element"
              key={index}
              onClick={() => {
                this.props.showUserDetails();
                this.props.getUserInfo(this.state.users_info[index]);
              }}
            >
              <div className="users-list__element-avatar"></div>
              {this.state.name}
              {user.name} {user.surname}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
