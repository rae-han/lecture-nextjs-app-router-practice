import React from 'react';

interface Prosp {
  placeholder: string;
}

const Input = ({placeholder}: Prosp) => {
  return (
    <input placeholder={placeholder} />
  );
};

export default Input;