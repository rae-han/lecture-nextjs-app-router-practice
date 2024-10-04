import React from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
}

const Button = ({ type = 'button', text = 'button'}: Props) => {
  return (
    <button type={type} >
      {text}
    </button>
  );
};

export default Button;