import React from "react";
import { evaluate } from "mathjs";

import { StyledButton } from "./Button.styled";

const Button = ({ id, input, data, setData }) => {
  const changeInput = input === "/" ? <span>&divide;</span> : input;

  const handleInput = () => {
    switch (input) {
      case "clear":
        setData("0");
        break;
      case "0":
        if (data !== "0") {
          setData(data + input);
        } else {
          return;
        }
        break;

      default:
        if (data === "0") {
          setData(input);
        } else {
          setData(data + input);
        }
        break;
    }
  };

  return (
    <StyledButton id={id} onClick={handleInput}>
      {changeInput}
    </StyledButton>
  );
};

export default Button;
