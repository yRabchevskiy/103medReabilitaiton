import styled from "styled-components";

interface Props {
  selected: boolean;
}
export const LangItemWrapper = styled.div<Props>`
  border-radius: 8px;
  border: 1px solid;
  border-color: ${props => props.selected ? 'red' : 'rgb(222 226 230 / 31%)'};
  background: rgb(222 226 230 / 31%);
  padding: 20px;
  margin: 0 20px 20px 0;
  width: 264px;
  max-height: 180px;
  box-shadow: 8px 8px 12px 4px rgb(0 0 0 / 16%);
  display: flex;
  flex-direction: column;
`;

export const LangItemTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  flex-shrink: 0;
`;

export const LangItemDesc = styled.div`
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
  flex-grow: 1;
  color: rgba(77, 80, 96, 1);
`;

export const LangItemFooter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  height: 24px;
  margin-top: 8px;
`;

