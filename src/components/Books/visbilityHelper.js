import React from "react";
import VisibilitySensor from "react-visibility-sensor";

class VisHelper extends React.Component {
  onChange(isVisible) {
    console.log(`Element `, isVisible ? "1" : "0");
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onChange}>
        <p>{this.props.akapit}</p>
      </VisibilitySensor>
    );
  }
}
export default VisHelper;
