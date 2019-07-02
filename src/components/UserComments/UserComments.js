import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./UserComments.scss";

class UserComments extends React.Component {
  constructor(props) {
    super(props);

    this.fullName = `${this.props.userName.name} ${this.props.userName.surname}`;
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  state = {
    value: "",
    commentsList: []
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  objLength(obj) {
    // get object (with user comments) keys length
    var key,
      len = 0;
    for (key in obj) {
      len += Number(obj.hasOwnProperty(key));
    }
    return len;
  }

  setComments(userName) {
    // add comments to local storage by user name
    let userCommentsData = localStorage.getItem(userName);
    let storageData;

    if (!userCommentsData) {
      storageData = JSON.stringify({
        comment: {
          commentText: this.state.value
        }
      });

      localStorage.setItem(userName, storageData);
    } else {
      let data = JSON.parse(userCommentsData || "{}");
      let objLen = this.objLength(data);
      let newComment = "comment_" + (objLen + 1);

      data[newComment] = {
        commentText: this.state.value
      };

      storageData = JSON.stringify(data);

      localStorage.setItem(userName, storageData);
    }
  }

  addComment(event) {
    event.preventDefault();

    if (this.state.value !== "") {
      this.setComments(this.fullName);
      this.setState({
        commentsList: [...this.state.commentsList, this.state.value]
      });
    } else {
      alert("Поле с сообщением не заполнено!");
    }
  }

  getComments(value) {
    let localValue = localStorage.getItem(value);
    let data = JSON.parse(localValue || "{}");
    let objKeys = Object.keys(data);

    if (localValue) {
      for (let i = 0; i < objKeys.length; i++) {
        this.state.commentsList.push(data[objKeys[i]].commentText);
      }
    }
    this.setState({ commentsList: this.state.commentsList });
  }

  componentDidMount() {
    this.getComments(this.fullName);
  }

  render() {
    const { commentsList } = this.state;

    return (
      <div className="user-comments">
        <Paper>
          <div className="user-comments__inner">
            <div className="user-comments-list">
              {commentsList.map((comment, index) => (
                <div key={index} className="user-comments-list__element">
                  {comment}
                </div>
              ))}
            </div>

            <div className="user-comments-form">
              <form id="addCommentForm" onSubmit={this.addComment}>
                <TextField
                  id="filled-full-width"
                  style={{ marginBottom: 16 }}
                  label="Введите сообщение"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  value={this.state.value}
                  onChange={this.handleChange}
                />

                <Button
                  type="submit"
                  form="addCommentForm"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={this.addComment}
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UserComments;
