'use server'

export default async function createCategory(formData: FormData) {
  await fetch('http://localhost:3004/categories', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.get('name'),
    }),
  })
}
