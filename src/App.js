import React from "react";
import Grid from "@material-ui/core/Grid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import UserComments from "./components/UserComments/UserComments";

class App extends React.Component {
  state = {
    usersColWidth: 12,
    detailsColWidth: 6,
    userInfo: [],
    infoArray: [],
    isDetailsVisible: false
  };

  getUserInfo = (name, info) => {
    this.setState({ userName: name, userInfo: info });
  };

  showFormInput = () => {
    this.setState({
      canSubmit: true
    });
  };

  hideForm = () => {
    this.setState({
      canSubmit: false
    });
  };

  showUserDetails = () => {
    this.setState({
      isDetailsVisible: true,
      usersColWidth: 6,
      detailsColWidth: 6
    });
  };

  render() {
    const { isDetailsVisible, canSubmit } = this.state;

    return (
      <div className="App">
        <Grid container spacing={0} alignItems="stretch">
          <Grid item xs={this.state.usersColWidth}>
            <Users
              hideForm={this.hideForm}
              getUserInfo={this.getUserInfo}
              showUserDetails={this.showUserDetails}
            />
          </Grid>

          <TransitionGroup component={null}>
            {isDetailsVisible && (
              <CSSTransition classNames="option" timeout={500}>
                <Grid item xs={this.state.detailsColWidth}>
                  <UserDetails
                    userName={this.state.userName}
                    userInfo={this.state.userInfo}
                    showFormInput={this.showFormInput}
                    canSubmit={this.state.canSubmit}
                  />
                  {canSubmit && <UserComments userName={this.state.userName} />}
                </Grid>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Grid>
      </div>
    );
  }
}

export default App;
