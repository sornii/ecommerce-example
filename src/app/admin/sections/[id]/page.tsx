import { Section } from '@/types'

export default async function SectionDetail({ params }: any) {
  const section: Section = await fetch(
    `http://localhost:3004/sections/${params.id}`
  ).then((res) => res.json())

  return <>{JSON.stringify(section)}</>
}
