import React, { Component } from "react";
import { adresse } from "../../config";
import { getUser } from "../../services/auth";
import classesRoot from "../../styles/index.module.scss";
import classes from "../../styles/addBook.module.scss";
import { Link, Redirect } from "react-router-dom";
import update from "immutability-helper";
import axios from "../../axiosInstance";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Writing extends Component {
  state = {
    book: {},
    id: "",
    img: "",
    changeGenre: false,
    changeCat: false,
    cat: [],
    genre: "",
    loaded: false,
    deleted: false,
    validation: false,
    showInput: false,
    inp: "",
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
          this.setState({ book: book, cat: book.categories }, () => {
            this.setState({ loaded: true });
          });
        });
    });
  }
  addCat = (event) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    let array = [...this.state.cat];
    array = [...array, event.target.value];
    const ar = [...new Set(array)];
    this.setState({ cat: ar }, () => {
      fetch(`${adresse}/books/mine/patchCat/${this.state.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({ categories: this.state.cat }),
      })
        .then((response) => {
          if (!response.ok) {
          }
          return response.json();
        })
        .then((data) => {});
    });
  };
  deleteCategory(id) {
    let cat = this.state.cat;
    cat.splice(id, 1);
    this.setState({ cat });
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    fetch(`${adresse}/books/mine/patchCat/${this.state.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ categories: this.state.cat }),
    })
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {});
  }
  changeGenre = (event) => {
    this.setState({ genre: event.target.value }, () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      };
      let { id } = this.props.match.params;
      this.setState({ id: id }, () => {
        fetch(`${adresse}/books/mine/patchGenre/${this.state.id}`, {
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
  chagnerCatHandler() {
    this.setState({
      changeCat: !this.state.changeCat,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.book.genre !== this.state.genre && this.state.genre !== "") {
      this.setState({
        book: update(this.state.book, {
          genre: { $set: this.state.genre },
        }),
        changeGenre: false,
      });
    }
  }
  validationHandler(id) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    if (this.state.validation === true) {
      axios
        .delete(`${adresse}/books/mine/deleteBook/${id}`, {
          headers: headers,
          data: JSON.stringify({ id: id }),
        })
        .then((response) => {
          return response;
        })
        .then((data) => {
          return this.props.history.push("/");
        });
    }
  }
  deleteBook = () => {
    this.setState({ showInput: !this.state.showInput });
  };
  render() {
    console.log(this.state.cat);
    return (
      <div className={classes.BackgroundForBook}>
        <h2>{this.state.book.title}</h2>
        <div className={classes.writingContainer}>
          <img src={`${adresse}/${this.state.book.coverUrl}`} alt="cover" />
        </div>
        <div className={classes.writingContainer}>
          <p>Rodzaj literacki: &nbsp;&nbsp;</p>
          {this.state.changeGenre ? (
            <div>
              <select
                value={this.state.genre}
                onChange={(event) => this.changeGenre(event)}
              >
                <option value=""></option>
                <option value="Kryminał">Kryminał</option>
                <option value="Powieść psychologiczna">
                  Powieść psychologiczna
                </option>
                <option value="Powieść romantyczna">Powieść romantyczna</option>
                <option value="Powieść obyczajowa">Powieść obyczajowa</option>
                <option value="Eseje">Eseje</option>
                <option value="Thriller">Thriller</option>
                <option value="Powieść humorystyczna">
                  Powieść humorystycza
                </option>
                <option value="Horror">Horror</option>
                <option value="Si-fi">Si-Fi</option>
                <option value="Fantastyka">Fantastyka</option>
                <option value="Literatura faktu">Literatura faktu</option>
                <option value="Dla dzieci i młodzieży">
                  Dla dzieci i młodzieży
                </option>
              </select>
            </div>
          ) : (
            <p>{this.state.book.genre}</p>
          )}
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => this.chagnerGenreHandler()}
          />
        </div>
        <div className={classes.writingContainer}>
          <p>Kategoria: &nbsp;&nbsp;</p>
          {this.state.cat ? (
            this.state.changeCat ? (
              <div>
                <select
                  multiple={true}
                  value={this.state.cat}
                  onChange={this.addCat}
                >
                  <option value="czytadło">czytadło</option>
                  <option value="nowela">nowela</option>
                  <option value="borgesowska">borgesowska</option>
                  <option value="realizm magiczny">realizm magiczny</option>
                  <option value="opera mydlana">opera mydlana</option>
                  <option value="dekadencja">dekadencja</option>
                  <option value="romantyzm">romantyzm</option>
                  <option value="klasycznie">klasycznie</option>
                  <option value="cyberpunk">cyberpunk</option>
                  <option value="przy świecy">przy świecy</option>
                  <option value="kropla drąży skałę">kropla drąży skałę</option>
                  <option value="brutalna">brutalna</option>
                  <option value="abstrakcja">abstrakcja</option>
                  <option value="kości zostały rzucone">
                    kości zostały rzucone
                  </option>
                </select>
              </div>
            ) : (
              this.state.cat.map((cat, index) => (
                <p>
                  {cat}
                  <strong onClick={() => this.deleteCategory(index)}>× </strong>
                </p>
              ))
            )
          ) : null}
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => this.chagnerCatHandler()}
          />
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
        {this.state.showInput === true ? (
          <div>
            <label>Wpisz tytuł książki i potwierdź usunięcie książki</label>
            <input
              value={this.state.inp}
              onChange={(e) =>
                this.setState({
                  inp: e.target.value,
                  validation:
                    e.target.value === this.state.book.title ? true : false,
                })
              }
            />
            <button onClick={() => this.validationHandler(this.state.id)}>
              Potwierdzam usunięcie
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Writing;
