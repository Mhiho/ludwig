import React, { Component } from "react";
import { adresse } from "../../config";
import classes from "../../styles/search.module.scss";
import classes2 from "../../styles/login.module.scss";
import QuantitySlider from "./QuantitySlider";
import CategorySlider from "./CategorySlider";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      limit: 1,
      data: [],
      error: "",
      category: "books",
    };
  }
  handleSubmit(event) {
    event.preventDefault();

    fetch(
      `${adresse}${this.state.category}/search?term=${this.state.term}&limit=${this.state.limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
        if (this.state.data.length === 0) {
          this.setState({ error: "Nie znaleziono żadnej pozycji." });
        } else {
          this.setState({ error: "" });
        }
      });
  }
  changeLimit(arg) {
    this.setState({
      limit: arg,
    });
  }
  getMeCategory(arg) {
    this.setState({ category: arg });
  }
  render() {
    console.log(this.state.category);
    return (
      <div>
        <CategorySlider getMeCat={(arg) => this.getMeCategory(arg)} />
        <QuantitySlider changeLimit={(arg) => this.changeLimit(arg)} />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className={classes.searchContainer}>
            <input
              className={`${classes2.emailInp} ${classes.searchInp}`}
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />

            <input
              className={classes2.emailField}
              value="szukaj"
              type="submit"
            />
          </div>
        </form>
        <div className={classes.resultsField}>
          <h2> {this.state.error}</h2>

          {this.state.data.map((book, index) => (
            <div key={index} className={classes.result}>
              <span>
                tytuł:&nbsp;<h4>{book.title}</h4>
              </span>
              <span>
                autor:&nbsp;<h4>{book.author}</h4>
              </span>
              <span>
                gatunek:&nbsp;<h5>{book.genre}</h5>
              </span>
              <span>
                rok publikacji:&nbsp;<h5>{book.year}</h5>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
