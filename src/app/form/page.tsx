"use client";

import React from 'react';
import { useFormState } from 'react-dom'
import Form from '@components/Form';
import Button from '@components/Button';
import FormInput from '@components/FormInput';
import { createAccount } from '../../actions/account';

const Page = () => {
  const [state, dispatch] = useFormState(createAccount, null);
  // 두 번째 인자 이름으로 많이 쓰는 것: action, trigger, dispatch

  return (
    <Form action={dispatch}>
      <FormInput name={'name'} placeholder={'입력해 주세요'} />
      <FormInput name={'id'} placeholder={'입력해 주세요'} />
      <Button type={'submit'} />
    </Form>
  );
};

export default Page;