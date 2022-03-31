import React, { Component } from "react";
import Swal from "sweetalert2";

class Choices extends Component {
  componentWillUnmount() {
    Swal.fire("¡Vamos por otra fascinante historia!");
  }
  render() {
    const { steps, handleHistory } = this.props;
    return (
      <div className="details">
        <h2 className="details-heading animated-text">
          Tu Historia (ultima eleccion {steps[steps.length - 1]})
        </h2>
        <ul className="details-list">
          {steps.map((step, index) => (
            <li
              key={index}
              className="details-item"
              onClick={() => handleHistory(index + 1)}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Choices;
