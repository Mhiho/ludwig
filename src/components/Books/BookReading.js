//do przerobienia, kod z PoemReading
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
      checkpoints: [],
      chapterNr: null,
      loading: true,
      position: 0,
      limit: 0,
      currentPosition: null,
      currentChapter: null,
    };
  }
  async componentDidMount() {
    await this.props.fetchCheckpoints();
    let { id } = await this.props.match.params;
    this.setState({ id: id }, () => {
      const book = this.props.checkpoints.checkpoints.find(
        (book) => book.bookId === id
      );
      this.setState({
        chapterNr: book.checkpointCh,
        position: book.checkpointA,
      });
    });
    await this.props.fetchReading(this.state.id);
    this.setState({ loading: false });
    setInterval(this.setPosition, 10000);

    const limit = (await this.myRef.current.offsetTop) - 300;
    this.setState({ limit: limit });
  }
  setPosition = async () => {
    const sm = new ScrollManager();
    const position = sm.getScrollPosition().scrollPosition;
    const url = `${adresse}/users/updateReadingBook/${this.state.id}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getUser().token,
      },
    };
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
        checkpointA: (position / this.state.limit) * 100,
      }),
    });
    this.setState({
      currentPosition: (position / this.state.limit) * 100,
    });
  };

  render() {
    let percent = (this.state.position / this.state.limit) * 100;
    const { book } = this.props;
    if (book.reading.length === 0) {
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
          now={percent}
          variant="warning"
        />
        <div>
          {book.reading.chapters.length > 0
            ? book.reading.chapters.map((chapter, index) => (
                <button className={classes.btnChaptitle}>
                  {chapter.chapTitle}
                </button>
              ))
            : null}
        </div>
        {book.reading.chapters.length > 0
          ? book.reading.chapters[this.state.chapterNr].chapTitle
          : null}
        {book.reading.chapters.length > 0
          ? book.reading.chapters[
              this.state.chapterNr
            ].akapits.map((akapit, index) => <p>{akapit}</p>)
          : null}
        <div ref={this.myRef}>.</div>
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
