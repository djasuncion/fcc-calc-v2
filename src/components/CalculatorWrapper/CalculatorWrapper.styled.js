import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

export const StyledCalculatorWrapper = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
