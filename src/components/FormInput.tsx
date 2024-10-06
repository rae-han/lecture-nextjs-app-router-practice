import React from 'react';
import Input from '@components/Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  errors?: string[];
}

const FormInput = ({ placeholder = '', errors = [], ...rest }: Props) => {
  return (
    <div>
      <Input placeholder={placeholder} {...rest}  />
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

export default FormInput;