import React, { Component } from "react";
import { adresse } from "../../config";
import { Link } from "react-router-dom";
import classes from "../../styles/books.module.scss";
import axios from "../../axiosInstance";
import loading from "../../styles/app.module.scss";

class Sample extends Component {
  state = {
    id: null,
    book: {},
    loading: true,
  };
  async componentDidMount() {
    let { id } = await this.props.match.params;
    this.setState({ id: id });
    const response = await axios.get(
      `${adresse}/books/sample/${this.state.id}`
    );
    console.log(response);
    this.setState({ book: response.data }, () =>
      this.setState({ loading: false })
    );
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
    console.log(this.state.book);
    return (
      <div>
        <div>
          {this.state.book !== undefined
            ? this.state.book.sample
            : "Autor nie dodał jeszcze próbki swojej książki"}
        </div>
        <Link to={`/${this.state.id}/reading/${0}`}>
          <button className={classes.btnChaptitle}>Czytaj dalej</button>
        </Link>
      </div>
    );
  }
}
export default Sample;
