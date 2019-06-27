import React from "react";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

class App extends React.Component {
  state = {
    userInfo: [],
    infoArray: []
  };

  componentDidMount() {}

  getUserInfo = info => {
    this.setState({ userInfo: info });
  };

  showDetailInfo = () => {
    return this.state.userId;
  };

  render() {
    return (
      <div className="App">
        <Users getUserInfo={this.getUserInfo} />
        <UserDetails userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
