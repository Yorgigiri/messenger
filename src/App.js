import React from "react";
import Grid from "@material-ui/core/Grid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

class App extends React.Component {
  state = {
    usersColWidth: 12,
    detailsColWidth: 6,
    userInfo: [],
    infoArray: [],
    isDetailsVisible: false
  };

  componentDidMount() {}

  getUserInfo = info => {
    this.setState({ userInfo: info });
  };

  showUserDetails = () => {
    this.setState({
      isDetailsVisible: true,
      usersColWidth: 6,
      detailsColWidth: 6
    });
  };

  render() {
    const { isDetailsVisible } = this.state;

    return (
      <div className="App">
        <Grid container spacing={0} alignItems="stretch">
          <Grid item xs={this.state.usersColWidth}>
            <Users
              getUserInfo={this.getUserInfo}
              showUserDetails={this.showUserDetails}
            />
          </Grid>

          <TransitionGroup component={null}>
            {isDetailsVisible && (
              <CSSTransition classNames="option" timeout={500}>
                <Grid item xs={this.state.detailsColWidth}>
                  <UserDetails userInfo={this.state.userInfo} />
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
