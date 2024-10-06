import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: Props) => {
  return (
    <input placeholder={placeholder} {...rest} />
  );
};

export default Input;