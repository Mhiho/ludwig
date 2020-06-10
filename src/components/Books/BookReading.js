//do przerobienia, kod z PoemReading
import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../../styles/mypoems.module.scss";
import loading from "../../styles/app.module.scss";
import { fetchReadingBook } from "../../actions/BooksReadingAction";

class BookReading extends Component {
  state = {
    id: null,
  };
  async componentDidMount() {
    let { id } = await this.props.match.params;
    this.setState({ id: id }, () => this.props.fetchReading(this.state.id));
  }

  render() {
    const { reading } = this.props;
    return (
      <div className={classes.ContainerReading}>
        <h2>{reading.author}</h2>
        {/* <h3>{reading.title}</h3>
        <h4>{reading.genre}</h4>
        <div>
          {reading === undefined
            ? null
            : reading.categories.map((cat, index) => (
                <h5 key={`category-book-reading-${index}`}>{cat}</h5>
              ))}
        </div>

        {reading === undefined
          ? null
          : reading.chapters.map((chapter, indCh) => (
              <div key={chapter._id}>
                {chapter.akapits.map((akapit, index) => (
                  <div>{akapit}</div>
                ))}
              </div>
            ))}
        <h5>{reading.year}</h5>
        <p>{reading.description}</p> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reading: state.booksReadingState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReading: (id) => dispatch(fetchReadingBook(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookReading);
