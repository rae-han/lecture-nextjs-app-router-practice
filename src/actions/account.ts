'use server';

import {z} from 'zod';

const nameSchema = z.string({
  invalid_type_error: '문자열이 아닙니다',
  required_error: '이름을 입력해주세요',
}).min(2, '너무 짧음').max(20, '너무 김').refine(() => false, 'custom error');
// string 메서드 기준
// - invalid_type_error: 타입이 안맞는 경우(string인데 number로 들어온 경우)
// - required_error: 필수값이 안들어온 경우
//  - 기본 적으로 모든 값을 필수이고, 필수값이 아닌 경우에는 .optional()을 사용


const formSchema = z.object({
  email: z.string().email(),
  name: nameSchema,
})

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
  }

  console.log({data})

  // try {
  // // nameSchema.parse(data.name);
  // formSchema.parse(data);
  //
  // } catch (error) {
  //   console.error(error);
  // }
  const result = formSchema.safeParse(data);

  console.log({result})

  if (!result.success) {
    console.error(result.error)
    console.log({error: result.error, flatten: result.error.flatten()})
    return result.error.flatten();
  }
}