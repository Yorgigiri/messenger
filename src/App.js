import React from "react";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import UserComments from "./components/UserComments/UserComments";

class App extends React.Component {
  state = {
    usersColWidth: 12,
    detailsColWidth: 6,
    userInfo: [],
    infoArray: [],
    isDetailsVisible: false,
    onlyAvatars: false
  };

  getUserInfo = (name, info) => {
    this.setState({ userName: name, userInfo: info });
  };

  showForm = () => {
    this.setState({
      canSubmit: true,
      onlyAvatars: true,
      isDetailsVisible: false
    });
  };

  hideForm = () => {
    this.setState({
      canSubmit: false,
      onlyAvatars: false
    });
  };

  showUserDetails = () => {
    this.setState({
      isDetailsVisible: true
    });
  };

  render() {
    const { isDetailsVisible, canSubmit } = this.state;
    let changeableClassName = "App";

    if (isDetailsVisible) {
      changeableClassName += " App_isDetailsVisible";
    } else if (canSubmit) {
      changeableClassName += " App_canSubmit";
    }
    return (
      <div className={changeableClassName}>
        <h1>Messenger</h1>
        <div className="custom-grid__row">
          <div className="custom-grid__column custom-grid__column_left">
            <Users
              hideForm={this.hideForm}
              getUserInfo={this.getUserInfo}
              showUserDetails={this.showUserDetails}
              onlyAvatars={this.state.onlyAvatars}
            />
          </div>

          <div className="custom-grid__column custom-grid__column_right">
            {isDetailsVisible && (
              <UserDetails
                userName={this.state.userName}
                userInfo={this.state.userInfo}
                showForm={this.showForm}
                canSubmit={this.state.canSubmit}
              />
            )}
            {canSubmit && <UserComments userName={this.state.userName} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
