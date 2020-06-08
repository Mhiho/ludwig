import React, { Component } from "react";
import { getUser } from "../../services/auth";
import { adresse } from "../../config";
import classes from "../../styles/books.module.scss";

class Reading extends Component {
  state = {
    id: null,
    book: undefined,
    chapterNr: null,
  };
  componentDidMount() {
    let { chapterNr } = this.props.match.params;
    let { id } = this.props.match.params;
    this.setState(
      {
        id: id,
        chapterNr: chapterNr,
      },
      () => {
        const url = `${adresse}/books/${this.state.id}`;
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getUser().token,
        };
        fetch(url, {
          headers: headers,
        })
          .then((response) => response.json())
          .then((data) => {
            this.setState({ book: data });
          });
      }
    );
  }
  render() {
    console.log(this.state.book);
    return (
      <div>
        <div>
          {this.state.book !== undefined
            ? this.state.book.chapters.map((chapter, index) => (
                <button className={classes.btnChaptitle}>
                  {chapter.chaptitle}
                </button>
              ))
            : null}
        </div>
        {this.state.book !== undefined
          ? this.state.book.chapters[this.state.chapterNr].chaptitle
          : null}
        {this.state.book !== undefined
          ? this.state.book.chapters[
              this.state.chapterNr
            ].akapits.map((akapit, index) => <p>{akapit}</p>)
          : null}
      </div>
    );
  }
}

export default Reading;
