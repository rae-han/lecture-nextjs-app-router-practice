import React from 'react';
import Input from '@components/Input';

interface Props {
  placeholder?: string;
  errors?: string[];
}

const FormInput = ({ placeholder = '', errors = [] }: Props) => {
  return (
    <div>
      <Input placeholder={placeholder} />
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

export default FormInput;