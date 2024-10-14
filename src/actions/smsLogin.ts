'use server';

import {z} from 'zod';
import validator from 'validator'

// const formSchema = z.object({
//   phone: nameSchema,
//   token: z.string()
// })
// 1. 이번엔 phone, token 따로 검사 할 거라 이렇게 같이 검사할 필요 없다.

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

const tokenSchema  = z.coerce.number().min(100000).max(999999);



export async function smsLogin(prevState: any, formData: FormData) {

  const phone = formData.get('phone');
  const token = formData.get('token');

  console.log(1113, {phone, token})





}