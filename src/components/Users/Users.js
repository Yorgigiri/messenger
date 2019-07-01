import React from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import "./Users.scss";

class Users extends React.Component {
  state = {
    users: [],
    users_info: []
  };

  componentDidMount() {
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
                this.props.hideForm();
                this.props.showUserDetails();
                this.props.getUserInfo(user, this.state.users_info[index]);
              }}
            >
              <Avatar size="large" className="users-list__element-avatar">
                {`${user.name.charAt(0)} ${user.surname.charAt(0)}`}
              </Avatar>
              <span className="users-list__element-username">
                {user.name} {user.surname}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
