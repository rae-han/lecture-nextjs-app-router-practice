'use server';

import {z} from 'zod';

const nameSchema = z.string().min(2).max(20);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    id: formData.get('id'),
  }

  console.log({data})

  nameSchema.parse(data.name);

  return data;
}