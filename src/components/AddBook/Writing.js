import React, { Component } from "react";
import { adresse } from "../../config";
import { getUser } from "../../services/auth";
import classesRoot from "../../styles/index.module.scss";
import classes from "../../styles/addBook.module.scss";
import { Link, Redirect } from "react-router-dom";
import update from "immutability-helper";

class Writing extends Component {
  state = {
    book: {},
    id: "",
    img: "",
    changeGenre: false,
    genre: "",
    loaded: false,
    deleted: false,
  };

  componentDidMount() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };

    let { id } = this.props.match.params;
    this.setState({ id: id }, () => {
      fetch(`${adresse}/books/mine/${this.state.id}`, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((book) => {
          this.setState({ book }, () => {
            this.setState({ loaded: true });
          });
        });
    });
  }

  changeGenre = (event) => {
    this.setState({ genre: event.target.value }, () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      };
      let { id } = this.props.match.params;
      this.setState({ id: id }, () => {
        fetch(`${adresse}books/mine/patchGenre/${this.state.id}`, {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({ genre: this.state.genre }),
        })
          .then((response) => {
            if (!response.ok) {
            }
            return response.json();
          })
          .then((data) => {});
      });
    });
  };
  chagnerGenreHandler() {
    this.setState({
      changeGenre: !this.state.changeGenre,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.book.genre !== this.state.genre && this.state.genre !== "") {
      this.setState({
        book: update(this.state.book, {
          genre: { $set: this.state.genre },
        }),
      });
    }
  }
  deleteBook = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };

    fetch(`${adresse}books/mine/deleteBook/${id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        return this.props.history.push("/");
      });
  };
  render() {
    return (
      <div className={classes.BackgroundForBook}>
        <h2>{this.state.book.title}</h2>
        <div className={classes.writingContainer}>
          <img src={`${adresse}/${this.state.book.coverUrl}`} alt="cover" />
        </div>
        <div className={classes.writingContainer}>
          <p>{this.state.book.genre}</p>{" "}
          <button onClick={() => this.chagnerGenreHandler()}>Edytuj</button>{" "}
          {this.state.changeGenre ? (
            <div>
              <select
                value={this.state.genre}
                onChange={(event) => this.changeGenre(event)}
              >
                <option value=""></option>
                <option value="kryminał">Kryminał</option>
                <option value="powieść psychologiczna">
                  Powieść psychologiczna
                </option>
                <option value="powieść romantyczna">Powieść romantyczna</option>
                <option value="powieść obyczajowa">Powieść obyczajowa</option>
                <option value="eseje">Eseje</option>
                <option value="thriller">Thriller</option>
                <option value="powieść humorystyczna">
                  Powieść humorystycza
                </option>
                <option value="horror">Horror</option>
                <option value="si-fi">Si-Fi</option>
                <option value="fantastyka">Fantastyka</option>
                <option value="literatura faktu">Literatura faktu</option>
                <option value="dla dzieci i młodzieży">
                  Dla dzieci i młodzieży
                </option>
              </select>{" "}
            </div>
          ) : null}{" "}
        </div>
        <div className={classes.writingContainer}>
          {this.state.book.categories &&
            this.state.book.categories.map((cat) => <span>cat</span>)}
        </div>
        <div className={classes.writingContainer}>
          {this.state.book.description}
        </div>
        <div className={classes.writingContainer}>{this.state.book.sample}</div>
        <div className={classes.writingContainer}>{this.state.book.year}</div>
        <div>
          <h3>Rozdziały</h3>
          {this.state.book.chapters &&
            this.state.book.chapters.map((chapter, index) => (
              <Link
                key={index}
                to={`/myBooks/${this.state.id}/chapters/${index}`}
              >
                <button className={classesRoot.typicalBtn}>
                  {chapter.chapTitle}
                </button>
              </Link>
            ))}
          {this.state.book.chapters && this.state.book.chapters.length > 0 ? (
            <Link
              to={`/myBooks/${this.state.id}/chapters/${this.state.book.chapters.length}`}
            >
              <button>Nowy rozdział</button>
            </Link>
          ) : (
            <Link to={`/myBooks/${this.state.id}/chapters/0`}>
              <button>Zacznij pisać</button>
            </Link>
          )}
        </div>
        <button onClick={() => this.deleteBook(this.state.id)}>
          Usuwam ten bullshit
        </button>
      </div>
    );
  }
}
export default Writing;
