import React from "react";
import Button from "@material-ui/core/Button";
import "./UserDetails.scss";

class UsersDetails extends React.Component {
  state = {
    canSubmit: this.props.canSubmit,
    userName: `${this.props.userName.name} ${this.props.userName.surname}`
  };

  render() {
    let { canSubmit } = this.props;

    return (
      <div className="user-details">
        <div className="user-details__name">
          {this.props.userName.name} {this.props.userName.surname}
        </div>
        <div className="user-details__box">
          <div className="user-details__label">О пользователе:</div>
          <div className="user-details__about">{this.props.userInfo.about}</div>
        </div>
        <div className="user-details__box">
          <div className="user-details__label">Возраст:</div>
          <div className="user-details__age">{this.props.userInfo.age}</div>
        </div>
        <div className="user-details__box">
          <div className="user-details__label">Город:</div>
          <div className="user-details__city">{this.props.userInfo.city}</div>
        </div>
        {!canSubmit && (
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={this.props.showFormInput}
          >
            Отправить сообщение
          </Button>
        )}
      </div>
    );
  }
}

export default UsersDetails;
