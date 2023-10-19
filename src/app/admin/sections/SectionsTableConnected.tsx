import { Section } from '@/types'
import SectionsTable from '@/app/admin/sections/SectionsTable'

export default async function SectionsTableConnected() {
  const sections: Section[] = await fetch('http://localhost:3004/sections', {
    cache: 'no-cache',
  }).then((res) => res.json())

  return <SectionsTable data={sections} />
}
