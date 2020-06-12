import React, { Component } from "react";
import { adresse } from "../../config";
import { Link } from "react-router-dom";
import classes from "../../styles/books.module.scss";
import axios from "../../axiosInstance";
import loading from "../../styles/app.module.scss";
import { getUser } from "../../services/auth";
import { connect } from "react-redux";
import { fetchCheckpoints } from "../../actions/CheckpointReadingAction";

class Sample extends Component {
  state = {
    id: null,
    book: {},
    loading: true,
    purchased: false,
    chapterNr: null,
  };
  async componentDidMount() {
    await this.props.fetchCheckpoints();
    let { id } = await this.props.match.params;
    this.setState({ id: id });
    const book = this.props.checkpoints.checkpoints.find(
      (book) => book.bookId === this.state.id
    );
    const chapterNr = book.checkpointCh;
    this.setState({ chapterNr });
    console.log(this.state.chapterNr);
    const url = `${adresse}/books/gatePurchased/${this.state.id}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUser().token,
    };
    const responseGate = await axios.get(url, {
      headers: headers,
    });
    this.setState({ purchased: responseGate.data.flag });
    const response = await axios.get(
      `${adresse}/books/sample/${this.state.id}`
    );

    this.setState({ book: response.data }, () => {
      this.setState({ loading: false });
    });
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
      <div>
        <div>
          {this.state.book !== undefined
            ? this.state.book.sample
            : "Autor nie dodał jeszcze próbki swojej książki"}
        </div>

        <Link
          to={
            this.state.purchased
              ? `/${this.state.id}/reading/${this.state.chapterNr}`
              : "/"
          }
        >
          <button className={classes.btnChaptitle}>Czytaj dalej</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkpoints: state.checkpointsReadingState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckpoints: () => dispatch(fetchCheckpoints()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
