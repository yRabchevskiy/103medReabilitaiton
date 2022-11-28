import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 64px;
  margin: 0 0 20px 0;
  &.invalid {
    input, select {
      border-color: var(--error);
      &:focus {
        border-color: var(--error);
      }
    }
    label {
      color: var(--error);
    }
  }
  label {
    flex-shrink: 0;
    font-size: 16px;
    margin-bottom: 8px;
    line-height: 16px;
  }
  input,
  select {
    height: 48px;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 20px;
    border: 1px solid;
    border-color: var(--inputBorder);
    background-color: var(--inputBg);
    outline: 0;
    &:focus {
      border-color: var(--inputActive);
    }
    
  }
`;

export const InputError = styled.div`
  font-size: 12px;
  line-height: 16px;
  min-height: 16px;
  color: var(--error);
`;
