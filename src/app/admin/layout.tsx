import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import MobileSidebar from '@/app/admin/MobileSidebar'
import DesktopSidebar from '@/app/admin/DesktopSidebar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className='h-full bg-gray-50' lang='en'>
      <body className='h-full'>
        <MobileSidebar />
        <DesktopSidebar />

        <main className='py-10 lg:pl-72'>
          <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </body>
    </html>
  )
}