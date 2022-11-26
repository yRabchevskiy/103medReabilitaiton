import styled from "styled-components";

export const PrimaryButtonStyles = styled.button`
  width: 100%;
  max-width: 200px;
  height: 40px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;