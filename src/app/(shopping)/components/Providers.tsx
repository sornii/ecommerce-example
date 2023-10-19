'use client'

import { CommandProvider } from '@/app/(shopping)/components/CommandContext'

export default function Providers({ children }: { children: any }) {
  return <CommandProvider>{children}</CommandProvider>
}
