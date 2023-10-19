'use server'

export default async function createCategory(formData: FormData) {
  const userId = '1'

  const sql = `
    INSERT INTO categories (name, created_by)
    VALUES ($1, ${userId})
    RETURNING *
  `

  return await db.query(sql, [formData.get('name')])
}
