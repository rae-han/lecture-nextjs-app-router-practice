import React from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

const Form = ({ children, ...rest }: Props) => {
  return (
    <form {...rest}>
      {children}
    </form>
  );
};

export default Form;