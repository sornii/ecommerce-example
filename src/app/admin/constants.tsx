import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  {
    name: 'Categories',
    href: '/admin/categories',
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Sections',
    href: '/admin/sections',
    icon: FolderIcon,
    current: false,
  },
  { name: 'Items', href: '/admin/items', icon: CalendarIcon, current: false },
  {
    name: 'Products',
    href: '/admin/products',
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
