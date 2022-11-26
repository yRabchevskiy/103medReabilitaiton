import React from "react";
import { PrimaryButtonStyles } from "../style";

interface Props {
  label: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  style?: Object;
  type?: "button" | "submit";
}
 
const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
    <PrimaryButtonStyles
      type={props.type || 'button'}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </PrimaryButtonStyles>
  );
};

export default React.memo(PrimaryButton);