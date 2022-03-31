import React from "react";

const Option = ({ handleOption, number, text, icon }) => {
  return (
    <div className="option">
      <button
        onClick={() => handleOption(number)}
        id={String.fromCharCode(65 + number)}
        className="button"
      >
        {icon}
      </button>
      <h2 className="option__text animated-text">{text}</h2>
    </div>
  );
};

export default Option;
