import React from 'react';
import { InputError, Wrapper } from './style';

const ReactiveSelect = React.forwardRef(({ name, label, options, defaultSelected, children, ...rest }: any, ref) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <select name={name} {...rest} ref={ref}>
        {(options as string[]).map(it => <option selected={defaultSelected === it} value={it}>{it}</option>)}
      </select>
      <InputError>{children ? children : null}</InputError>
    </Wrapper>
  );
});

export default React.memo(ReactiveSelect);