import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  min-height: 40px;
  margin-bottom: 12px;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: text;
`;

export const EyeIcon = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin: auto 6px auto 6px;
  position: absolute;
  top: calc(50% - 16px);
  right: 6px;
  cursor: pointer;
`;