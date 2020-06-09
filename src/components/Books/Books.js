import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useStore } from "../../store/ContextAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import { adresse } from "../../config";
import classes from "../../styles/books.module.scss";
import empty from "../../assets/images/empty.png";
import loading from "../../styles/app.module.scss";
import { getAllBooks } from "../../actions/BooksAction";
import { isLoggedIn } from "../../services/auth";

class Books extends Component {
  state = {
    id: 0,
    opacity: false,
    panel: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    nrOfBooks: 3,
    loading: true,
    books: [],
  };

  addOwnBook = () => {
    if (isLoggedIn() === true) {
      return <Redirect to="/addBook" />;
    } else {
      return;
    }
  };
  async componentDidMount() {
    await this.props.getBooks();
    const { books } = this.props;
    const shuffled = await books.books.sort(() => 0.5 - Math.random());
    const shuffledTen = await shuffled.slice(0, this.state.nrOfBooks);
    this.setState(
      {
        books: shuffledTen,
      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  narrowLeft() {
    this.state.id <= 0
      ? this.setState({ id: this.state.nrOfBooks - 1 })
      : this.setState({ id: this.state.id - 1, opacity: false });
  }
  narrowRight() {
    this.state.id >= this.state.nrOfBooks - 1
      ? this.setState({ id: 0 })
      : this.setState({ id: this.state.id + 1, opacity: false });
  }
  changeSlide(id) {
    this.setState({ id: id });
  }
  render() {
    if (this.state.loading) {
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
      <div className={classes.Container}>
        <div className={classes.Buttons}>
          <span className={classes.left} onClick={() => this.narrowLeft()}>
            ←
          </span>
          <span className={classes.right} onClick={() => this.narrowRight()}>
            →
          </span>
        </div>
        <div>
          <div className={classes.Slider}>
            <div className={classes.Cover}>
              <button onClick={() => this.addOwnBook()}>
                Dodaj swoją książkę
              </button>
              <Link to={`/sample/${this.state.books[this.state.id].id}`}>
                <img
                  className={
                    this.state.opacity
                      ? `${classes.opacity} ${classes.Slide}`
                      : `${classes.Slide}`
                  }
                  src={`${adresse}/${this.state.books[this.state.id].coverUrl}`}
                  alt="cover"
                />
                <div className={classes.upTitle}>
                  <p className={classes.title}>
                    {!this.state.loading
                      ? this.state.books[this.state.id].title
                      : null}
                  </p>
                </div>
              </Link>
              <div className={classes.upPanel}>
                <div className={classes.panel}>
                  {this.state.books.map((book, index) => (
                    <span
                      className={
                        this.state.panel[index] === false
                          ? `${classes.changeSlideCircle}`
                          : `${classes.changeSlideCircle} ${classes.activeCircle}`
                      }
                      onClick={() => this.changeSlide(index)}
                    >
                      o
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  books: state.booksState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getAllBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
