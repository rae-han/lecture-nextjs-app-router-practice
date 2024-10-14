import React from 'react';
import Input from '@components/Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  errors?: string[];
}

const FormInput = ({ name, placeholder = '', errors = [], ...rest }: Props) => {
  return (
    <div>
      <Input name={name} placeholder={placeholder} {...rest}  />
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

export default FormInput;