//to automatically generate initial function arrow code --> rafce

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void; // ?  -> Optional
  color?: string; // ? -> optional  --> color needs not to be passed while Button is called in main class, we assign a default value in the function param
  // color?: 'primary' | 'secondary' | 'black'   //can only choose within these values to assign to color
}

const Button = ({ children, onClick, color = "dark" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
