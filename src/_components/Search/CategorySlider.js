import React from "react";
import classes from "../../styles/search.module.scss";

class CategorySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      category: "books",
    };
  }
  getMeCategory = (e) => {
    this.setState({ value: e.target.value }, () => {
      if (this.state.value < 2) {
        this.setState({ category: "books" }, () =>
          this.props.getMeCat(this.state.category)
        );
      } else if ((this.state.value > 1) & (this.state.value < 3)) {
        this.setState({ category: "stories" }, () =>
          this.props.getMeCat(this.state.category)
        );
      } else {
        this.setState({ category: "poems" }, () =>
          this.props.getMeCat(this.state.category)
        );
      }
    });
  };
  result(value) {
    if (this.state.value < 2) {
      return "książkę";
    } else if ((value > 1) & (value < 3)) {
      return "opowiadanie";
    } else {
      return "wiersz";
    }
  }
  render() {
    return (
      <div className={classes.quantitySlider}>
        <label htmlFor="customRange1">
          Wyszukaj {this.result(this.state.value)}
        </label>
        <input
          type="range"
          min="1"
          max="3"
          step="1"
          onChange={(e) => this.getMeCategory(e)}
          value={this.state.value}
          className="custom-range"
          id="customRange1"
        />
      </div>
    );
  }
}

export default CategorySlider;
