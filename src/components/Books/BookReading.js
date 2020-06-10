//do przerobienia, kod z PoemReading
import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../styles/mypoems.module.scss";
import loading from "../../styles/app.module.scss";
import { fetchReadingBook } from "../../actions/BooksReadingAction";

class BookReading extends Component {
  state = {
    id: null,
    chapterNr: null,
    loading: true,
  };
  async componentDidMount() {
    let { chapterNr } = await this.props.match.params;
    let { id } = await this.props.match.params;
    this.setState({ id: id, chapterNr: chapterNr });
    await this.props.fetchReading(this.state.id);
    this.setState({ loading: false });
  }

  render() {
    console.log(this.props.book.reading);
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
    console.log(book);
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.booksReadingState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReading: (id) => dispatch(fetchReadingBook(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookReading);
