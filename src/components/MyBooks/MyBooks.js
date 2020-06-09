import React, { Component } from "react";
import { Link } from "react-router-dom";
import { adresse } from "../../config";
import { getUser } from "../../services/auth";
import classes from "../../styles/mybooks.module.scss";
import loading from "../../styles/app.module.scss";
import empty from "../../assets/images/empty.png";

class MyBooks extends Component {
  _isMounted = false;
  state = {
    isLoading: true,
    books: [],
    urls: [],
  };
  componentDidMount() {
    this._isMounted = true;
    const url = `${adresse}/books/mine`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((books) => {
        this.setState({ books: books }, () => {
          this.setState({ isLoading: false });
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    if (this.state.isLoading === true) {
      return (
        <div
          style={{
            marginTop: "-180px",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={loading.loader}></div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/addBook">
          <h2>Dodaj własną książkę!</h2>
        </Link>
        <div className={classes.Container}>
          {this.state.books.length === 0
            ? null
            : this.state.books.map((book, index) => (
                <Link
                  key={book.id}
                  className={classes.Item}
                  to={`/myBooks/${book.id}/writing`}
                >
                  <div>
                    <img
                      src={
                        book.coverUrl ? `${adresse}/${book.coverUrl}` : empty
                      }
                      alt="cover"
                    />
                    <p>{book.title}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    );
  }
}

export default MyBooks;
