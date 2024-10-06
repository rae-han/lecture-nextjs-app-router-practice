'use server';

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    id: formData.get('id'),
  }

  console.log({data})

  return data;
}