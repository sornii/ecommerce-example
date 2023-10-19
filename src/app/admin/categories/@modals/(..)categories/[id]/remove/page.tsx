'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Modal from '@/components/Modal'
import deleteCategory from '@/fetching/delete-category'
import { useParams, useRouter } from 'next/navigation'

export default function Example() {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  return (
    <Modal>
      <div className='sm:flex sm:items-start'>
        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
          <ExclamationTriangleIcon
            className='h-6 w-6 text-red-600'
            aria-hidden='true'
          />
        </div>
        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            Deactivate account
          </h3>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed from our servers forever. This action
              cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          onClick={() => {
            deleteCategory(params.id)
              .then(() => router.back())
              .then(() => router.refresh())
              .catch(() => alert('error'))
          }}
          type='button'
          className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
        >
          Deactivate
        </button>
        <button
          onClick={() => router.back()}
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}
