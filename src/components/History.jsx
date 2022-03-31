import React, { Component } from "react";
import Swal from "sweetalert2";
import Choices from "./Choices";
import Options from "./Options";
import Paragraph from "./Paragraph";
import Sound from "./Sound";
import { storyOptions, adventure } from "../../history.json";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventure: adventure,
      picks: storyOptions.slice(0, 1).pop(),
      storyOptions: storyOptions,
    };
  }

  componentDidMount() {
    Swal.fire({
      title:
        "Esta historia no es para cobardes. ¡Continua sólo si sabes lo que haces!",
      padding: "3em",
    });
  }

  handleOption = (number) => {
    const picks = [...this.state.picks];
    picks.push(storyOptions[picks.length][number]);

    const isLast = picks.length === storyOptions.length;

    this.setState({
      picks: !isLast ? picks : storyOptions[0],
    });
  };

  handleHistory = (index) => {
    const { picks } = this.state;

    this.setState({
      picks: picks.slice(0, index),
    });
  };

  render() {
    const { adventure, picks } = this.state;
    const step = picks.length;
    const text = adventure[picks.length && picks.slice(-1)].text;
    const stepOptions = storyOptions[step].map((i) => adventure[i]);
    const storyIcons = picks.map((id) => adventure[id].icon);

    return (
      <div className="layout">
        <Paragraph text={text} />
        <Options list={stepOptions} handleOption={this.handleOption} />
        {step > 1 && (
          <React.Fragment>
            <Choices steps={storyIcons} handleHistory={this.handleHistory} />
            <Sound />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default History;
