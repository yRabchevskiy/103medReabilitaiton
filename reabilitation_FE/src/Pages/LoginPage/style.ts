import styled from "styled-components";

export const ImageBG = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const LoginFlexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const FormWrapper = styled.form`
  z-index: 1;
  width: 80vw;
  max-width: 600px;
  padding: 32px;
  margin: auto;
  background: var(--logoFormBg);
  display: flex;
  flex-direction: column;
`;

