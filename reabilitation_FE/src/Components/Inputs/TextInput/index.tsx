import React from "react";
import { Input, InputWrapper } from "../style";

interface Props {
  value: string;
  onChange: (v: string) => void;
  name: string;
  style?: Object;
}

const TextInput = React.forwardRef((props: Props, ref: any) => {
  const [value, setValue] = React.useState<string>(props.value || '');
  
  React.useEffect(() => {
    props.onChange(value);
  }, [value]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <InputWrapper>
      <Input ref={ref} name={props.name} style={props.style} type="text" value={value} onChange={onChangeValue} />
    </InputWrapper>
  );
});

export default React.memo(TextInput);
