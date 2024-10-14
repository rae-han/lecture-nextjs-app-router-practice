'use server';

import {z} from 'zod';

const checkUsername = (username: string) => !username.includes('a')

const checkPasswords = ({password, confirm_password}: {password: string, confirm_password: string}) => password === confirm_password

const nameSchema = z.string({
  invalid_type_error: '문자열이 아닙니다',
  required_error: '이름을 입력해주세요',
}).min(2, '너무 짧음').max(20, '너무 김').refine(checkUsername, 'no A');

const formSchema = z.object({
  phone: nameSchema,
  verification_code: z.string()
})



export async function SmsVerification(prevState: any, formData: FormData) {
  const data = {
    phone: formData.get('phone'),
    verification_code: formData.get('verification_code'),
  }

  console.log({data})

  const result = formSchema.safeParse(data);

  console.log({result})

  if (!result.success) {
    console.error(result.error)
    console.log({error: result.error, flatten: result.error.flatten()})
    return result.error.flatten();
  }
}