import React from "react";
import { evaluate } from "mathjs";

import { StyledButton } from "./Button.styled";

const Button = ({ id, input, data, setData }) => {
  const changeInput =
    input === "/" ? (
      <span>&divide;</span>
    ) : input === "*" ? (
      <span>&times;</span>
    ) : (
      input
    );

  const handleInput = e => {
    const opsTester = /[+|\-|*|/]+$/;
    const endsWithOps = opsTester.test(data);

    const CLEAR_DATA = () => {
      setData("0");
    };

    switch (input) {
      case "clear":
        CLEAR_DATA();
        break;
      case "0":
        if (data !== "0") {
          setData(data + input);
        } else {
          return;
        }
        break;
      case "=":
        const multiOps = /\d+[+|\-|/|*]{2,}\d+/;
        const isMultiOps = multiOps.test(data);

        console.log(isMultiOps);

        setData(evaluate(data));
        break;
      case ".":
        const regex = /.+\.$|\d+\.\d+(?![+|\-|*|/])/;
        const notAllow = regex.test(data);
        console.log(notAllow);

        if (notAllow) return;

        setData(data + input);
        break;

      case "+":
        if (endsWithOps) {
          const newData = data.replace(opsTester, input);
          setData(newData);
        } else {
          setData(data + input);
        }

        break;
      case "*":
        if (endsWithOps) {
          const newData = data.replace(opsTester, input);
          setData(newData);
        } else {
          setData(data + input);
        }

        break;
      case "/":
        if (endsWithOps) {
          const newData = data.replace(opsTester, input);
          setData(newData);
        } else {
          setData(data + input);
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
    <StyledButton value={input} id={id} onClick={handleInput}>
      {changeInput}
    </StyledButton>
  );
};

export default Button;
