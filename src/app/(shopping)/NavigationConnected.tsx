import Navigation from '@/app/(shopping)/Navigation'
import { Category, Item, Section } from '@/types'

// Wrapper/Container of the Navigation component
// React Server Component
export default async function NavigationConnected() {
  const categories: Category[] = await fetch(
    'http://localhost:3004/categories',
    {
      next: {
        tags: ['navigation'],
      },
    }
  ).then((res) => res.json())

  const sections: Section[] = await fetch('http://localhost:3004/sections', {
    next: {
      tags: ['navigation'],
    },
  }).then((res) => res.json())

  const items: Item[] = await fetch('http://localhost:3004/items', {
    next: {
      tags: ['navigation'],
    },
  }).then((res) => res.json())

  return (
    <Navigation
      categories={[
        ...categories.map((category) => ({
          ...category,
          sections: sections
            .filter((section) => {
              if (!section.categoryId) return true

              if (!Array.isArray(section.categoryId))
                return section.categoryId === category.id

              return section.categoryId.includes(category.id)
            })
            .map((section) => ({
              ...section,
              items: items.filter((item) => {
                if (item.sectionId !== section.id) return false

                if (!item.categoryId) return true

                if (!Array.isArray(item.categoryId))
                  return item.categoryId === category.id

                return item.categoryId.includes(category.id)
              }),
            })),
        })),
      ]}
    />
  )
}
