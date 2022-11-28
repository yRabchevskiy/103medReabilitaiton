import React from 'react';
import { InputError, Wrapper } from './style';

const ReactiveInput = React.forwardRef(({ name, label, children, ...rest }: any, ref) => {
  return (
    <Wrapper className={children ? 'invalid' : ''}>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} ref={ref} />
      <InputError>{children ? children : null}</InputError>
    </Wrapper>
  );
});

export default React.memo(ReactiveInput);