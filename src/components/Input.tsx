import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string;
}

const Input = ({ name, placeholder, ...rest }: Props) => {
  return (
    <input name={name} placeholder={placeholder} {...rest} />
  );
};

export default Input;