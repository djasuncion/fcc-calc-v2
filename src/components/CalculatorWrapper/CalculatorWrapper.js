import React from "react";

import {
  StyledPageWrapper,
  StyledCalculatorWrapper
} from "./CalculatorWrapper.styled";

const CalculatorWrapper = ({ children }) => {
  return (
    <StyledPageWrapper>
      <StyledCalculatorWrapper>{children}</StyledCalculatorWrapper>
    </StyledPageWrapper>
  );
};

export default CalculatorWrapper;
