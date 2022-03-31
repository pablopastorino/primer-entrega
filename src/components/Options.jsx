import React from "react";
import Option from "./Option";

const Options = ({ list, handleOption }) => {
  return (
    <div className="options">
      {list.map((option, index) => (
        <Option
          key={index}
          number={index}
          icon={option.icon}
          text={option.door}
          handleOption={handleOption}
        />
      ))}
    </div>
  );
};

export default Options;
