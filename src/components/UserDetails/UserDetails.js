import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "./UserDetails.scss";

class UsersDetails extends React.Component {
  state = {
    array: {},
    users_info: []
  };

  componentDidMount() {
    axios.get("./data/users_info.json").then(res => {
      const users_info = res.data;

      this.setState({ users_info });
    });
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
        <TextField
          id="filled-full-width"
          style={{ marginBottom: 16 }}
          placeholder="Введите сообщение"
          fullWidth
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" color="primary">
          Отправить сообщение
        </Button>
      </div>
    );
  }
}

export default UsersDetails;
