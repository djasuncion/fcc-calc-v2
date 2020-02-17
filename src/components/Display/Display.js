import React from "react";

import { StyledDisplay } from "./Display.styled";

const Display = ({ id, data }) => {
  return (
    <StyledDisplay id={id}>
      <span>{data}</span>
    </StyledDisplay>
  );
};

export default Display;
