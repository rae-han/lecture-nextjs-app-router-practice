import React from 'react';
import Form from '@components/Form';
import Button from '@components/Button';
import FormInput from '@components/FormInput';

const Page = () => {
  return (
    <Form>
      <FormInput placeholder={'입력해 주세요'} />
      <Button type={'submit'} />
    </Form>
  );
};

export default Page;