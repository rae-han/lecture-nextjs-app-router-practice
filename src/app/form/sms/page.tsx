"use client";

import React from 'react';
import { useFormState } from 'react-dom'
import Form from '@components/Form';
import Button from '@components/Button';
import FormInput from '@components/FormInput';
import { smsLogin } from '../../../actions/smsLogin';

const Page = () => {
  const [state, dispatch] = useFormState(smsLogin, null);
  // 두 번째 인자 이름으로 많이 쓰는 것: action, trigger, dispatch




  return (
    <Form action={dispatch}>
      <FormInput name={'phone'} placeholder={'입력해 주세요'} errors={state?.fieldErrors.phone} />
      <FormInput name={'token'} placeholder={'입력해 주세요'} errors={state?.fieldErrors.token} />
      <Button type={'submit'} />
    </Form>
  );
};

export default Page;