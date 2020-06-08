import React from "react";
import { getUser } from "../../services/auth";
import { adresse } from "../../config";

class Comments extends React.Component {
  state = {
    data: [],
    myCom: "",
  };
  componentDidMount() {
    const url = `${adresse}/comments/showComments/${this.props.idPoem}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data }, () => {
          this.setState({ isLoading: false });
        });
      });
  }

  addComment() {
    const url = `${adresse}comments/add/${this.props.idPoemm}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getUser().token}`,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ comment: this.state.comment }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("błąd");
        }
        return response.json();
      })
      .then((data) => {});
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      const url = `${adresse}comments/showComments/${this.props.idPoem}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${getUser().token}`,
      };
      fetch(url, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data: data });
        });
    }
  }

  render() {
    console.log(this.state.data.length);
    console.log(this.state.data);
    return (
      <div>
        <div>
          {this.state.data.map((comment) => (
            <div>
              <h3>{comment.commentAuthor}</h3>
              <h4>{comment.comment}</h4>
              <h5>{comment.commentedAt}</h5>
            </div>
          ))}
          <input
            type="text"
            onChange={(e) => this.setState({ comment: e.target.value })}
            value={this.state.comment}
            name="comment"
          />
          <button onClick={() => this.addComment()}>dodaj komentarz</button>
        </div>
      </div>
    );
  }
}

export default Comments;
