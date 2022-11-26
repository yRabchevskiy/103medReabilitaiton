import React from "react";
import { eyeIcon, eyeOffIcon } from "../../../images/icons";
import { EyeIcon, Input, InputWrapper } from "../style";

interface Props {
  value: string;
  onChange: (v: string) => void;
  name: string;
  style?: Object;
  eyeIconStyles?: Object;
}

const PasswordInput = React.forwardRef((props: Props, ref: any) => {
  const [value, setValue] = React.useState<string>(props.value || '');
  const [type, setType] = React.useState<string>('password');
  React.useEffect(() => {
    props.onChange(value);
  }, [value]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChangeType = () => {
    if (type === 'text') {
      setType('password');
      return;
    }
    setType('text');
  };
  return (
    <InputWrapper>
      <Input ref={ref} style={props.style} name={props.name} type={type} value={value} onChange={onChangeValue} />
      <EyeIcon style={props.eyeIconStyles} onClick={onChangeType}>{type === 'text' ? eyeIcon : eyeOffIcon}</EyeIcon>
    </InputWrapper>
  );
});

export default React.memo(PasswordInput);
