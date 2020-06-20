import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../styles/mypoems.module.scss";
import loading from "../../styles/app.module.scss";
import { fetchReadingBook } from "../../actions/BooksReadingAction";
import { fetchCheckpoints } from "../../actions/CheckpointReadingAction";
import { ProgressBar } from "react-bootstrap";
import ScrollManager from "window-scroll-manager";
import axios from "../../axiosInstance";
import { adresse } from "../../config";
import { getUser } from "../../services/auth";

class BookReading extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      id: null,
      checkpoints: this.props.checkpoints,
      chapterNr: null,
      loading: true,
      position: 0,
      limit: 0.1,
      currentPosition: null,
      currentChapter: null,
      bodyHeight: null,
    };
  }
  componentDidMount() {
    this.props.fetchCheckpoints();
    this.forceUpdate();
    let { id } = this.props.match.params;
    this.props.fetchReading(id);

    this.setState({ id: id }, () => {});

    // if (book) {
    setTimeout(() => {
      const book = this.props.checkpoints.checkpoints.find(
        (book) => book.bookId === this.state.id
      );
      this.setState(
        {
          chapterNr: book.checkpointCh,
          position: book.checkpointA,
        },
        () => {
          setTimeout(() => {
            this.setState({
              limit: this.myRef.current.offsetTop,
              loading: false,
            });
            window.scrollTo(0, (this.state.position * this.state.limit) / 100);
          }, 100);
        }
      );
    }, 500);
    // }

    setInterval(this.setPosition, 30000);
    const sm = new ScrollManager();
    window.addEventListener("window-scroll", (e) => {
      let scroll = e.detail.scrollPosition;
      // this.setState({ limit: this.myRef.current.offsetTop });
      this.setState({ currentPosition: (scroll / this.state.limit) * 100 });
    });
  }
  componentWillUnmount() {
    clearInterval(this.setPosition);
  }
  setPosition = async () => {
    const url = `${adresse}/users/updateReadingBook/${this.state.id}`;
    await axios({
      method: "put",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      },
      data: JSON.stringify({
        bookId: this.state.id,
        checkpointCh: this.state.chapterNr,
        checkpointA: Math.round(this.state.currentPosition),
      }),
    });
  };

  changeChapter(id) {
    this.setState({ chapterNr: id });
  }

  click = () => {
    window.scrollTo(0, (this.state.position * this.state.limit) / 100);
  };
  componentWillMount() {}
  // 4889
  // componentDidUpdate(prevProps, prevState) {}
  render() {
    const { book } = this.props;
    console.log(book, this.state.loading);
    if (!book.reading.chapters) {
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
        <ProgressBar
          className={`${classes.progressBar}`}
          now={this.state.currentPosition}
          variant="warning"
        />
        <div>
          <button onClick={() => this.click()}>klikkk</button>
          {book.reading.chapters &&
            book.reading.chapters.map((chapter, index) => (
              <button
                onClick={() => this.changeChapter(index)}
                className={classes.btnChaptitle}
              >
                {chapter.chapTitle}
              </button>
            ))}
        </div>
        {book.reading.chapters && this.state.chapterNr !== null
          ? book.reading.chapters[this.state.chapterNr].chapTitle
          : null}
        {book.reading.chapters && this.state.chapterNr !== null
          ? book.reading.chapters[
              this.state.chapterNr
            ].akapits.map((akapit, index) => <p>{akapit}</p>)
          : null}
        <div className="Ref" ref={this.myRef}>
          .
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.booksReadingState,
  checkpoints: state.checkpointsReadingState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReading: (id) => dispatch(fetchReadingBook(id)),
    fetchCheckpoints: () => dispatch(fetchCheckpoints()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookReading);
