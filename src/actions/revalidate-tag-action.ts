'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function revalidateTagAction(tag: string) {
  revalidateTag(tag)
  redirect(`/`)
}
