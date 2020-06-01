import React from "react";
import classes from "../../styles/search.module.scss";

class QuantitySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value }, () =>
      this.props.changeLimit(this.state.value)
    );
  };
  result = (value) => {
    if (value < 2) {
      return "wynik";
    } else if ((value > 1) & (value < 5)) {
      return "wyniki";
    } else {
      return "wyników";
    }
  };
  render() {
    return (
      <div className={classes.quantitySlider}>
        <label htmlFor="customRange1">
          Wyszukaj {this.state.value} {this.result(this.state.value)}
        </label>
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          onChange={(e) => this.handleChange(e)}
          value={this.state.value}
          className="custom-range"
          id="customRange1"
        />
      </div>
    );
  }
}

export default QuantitySlider;
