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
      <FormInput name={'email'} placeholder={'입력해 주세요'} errors={state?.fieldErrors.email} />
      <FormInput name={'name'} placeholder={'입력해 주세요'} errors={state?.fieldErrors.name} />
      <FormInput name={'password'} placeholder={'비밀번호'} errors={state?.fieldErrors.password} />
      <FormInput name={'confirm_password'} placeholder={'비밀번호 확인'} errors={state?.fieldErrors.confirm_password} />
      <Button type={'submit'} />
    </Form>
  );
};

export default Page;