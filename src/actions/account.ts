'use server';

import {z} from 'zod';

const nameSchema = z.string().min(2).max(20);

const formSchema = z.object({
  name: nameSchema,
  email: z.string().email(),
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