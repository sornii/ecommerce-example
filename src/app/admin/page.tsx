'use client'

import revalidateTagAction from '@/actions/revalidate-tag-action'

export default function Admin() {
  // TODO: Add the loading state

  return (
    <>
      <h1>Here is the admin page.</h1>

      <button
        onClick={() => revalidateTagAction('navigation')}
        className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Refresh
      </button>
    </>
  )
}
