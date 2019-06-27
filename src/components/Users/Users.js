import React from "react";
import axios from "axios";
import "./Users.scss";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);

  // this.getUsersInfo = this.getUsersInfo.bind(this);
  // }

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
            <div className="users-list__element" key={index}>
              {this.state.name}
              {user.name} {user.surname}
              <button
                onClick={() => {
                  this.props.getUserInfo(this.state.users_info[index]);
                }}
              >
                Кнопа
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
