import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import "./Users.scss";

class Users extends React.Component {
  state = {
    users: [],
    users_info: [],
    selected: null
  };

  toggleClass(el) {
    this.setState({ selected: el });
  }

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
    const userPaperElement = {
      overflow: "hidden"
    };

    return (
      <div className="users">
        <Paper style={userPaperElement}>
          <div className="users-list">
            {this.state.users.map((user, index) => (
              <div
                className={
                  this.state.selected === index
                    ? "users-list__element users-list__element_active"
                    : "users-list__element"
                }
                key={index}
                onClick={() => {
                  this.toggleClass(index);
                  this.props.hideForm();
                  this.props.showUserDetails();
                  this.props.getUserInfo(user, this.state.users_info[index]);
                }}
              >
                {this.props.onlyAvatars ? (
                  <Avatar className="users-list__element-avatar" size="large">
                    {`${user.name.charAt(0)} ${user.surname.charAt(0)}`}
                  </Avatar>
                ) : (
                  <div className="users-list__element-username">
                    {user.name} {user.surname}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

export default Users;
