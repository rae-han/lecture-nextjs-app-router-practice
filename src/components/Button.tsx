import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
}

const Button = ({ type = 'button', text = 'button', ...rest }: Props) => {
  return (
    <button type={type} {...rest} >
      {text}
    </button>
  );
};

export default Button;