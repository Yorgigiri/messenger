import React from "react";
import axios from "axios";
import "./UserDetails.scss";

class UsersDetails extends React.Component {
  state = {
    array: {},
    userAbout: "test",
    // userAge: String,
    // userCity: String,
    users_info: []
  };

  componentDidMount() {
    axios.get("./data/users_info.json").then(res => {
      const users_info = res.data;

      this.setState({ users_info });
    });
  }

  componentDidUpdate() {
    // let userId = this.props.id;
    // let array = this.state.users_info[userId];

    console.log(this.props.userInfo);

    // if (array) {
    //   // console.log(array);
    //   if (userId !== this.props.id) {
    //     console.log(array);
    //   } else {
    //     // this.setState({ array });
    //     // console.log(array);
    //   }
    // }
  }

  getDetailInfo() {
    axios.get("./data/users_info.json").then(res => {
      const users_info = res.data;

      this.setState({ users_info });
    });
  }

  render() {
    return (
      <div className="user-details">
        <div className="user-details__label">О пользователе:</div>
        <div className="user-details__about">{this.props.userInfo.about}</div>
        <div className="user-details__label">Возраст:</div>
        <div className="user-details__age">{this.props.userInfo.age}</div>
        <div className="user-details__label">Город:</div>
        <div className="user-details__city">{this.props.userInfo.city}</div>
        <button>Отправить сообщение</button>
        {/* {this.state.users_info.map((info, index) => (
          <div className="users-list__element" key={index}>
            <div>{info.about}</div>
            <div>{info.age}</div>
            <div>{info.city}</div>
          </div>
        ))} */}
      </div>
    );
  }
}

export default UsersDetails;
