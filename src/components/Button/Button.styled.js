import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem;

  grid-column: ${({ id }) => (id === "clear" ? "1 / 5" : 1 / 2)};
`;
