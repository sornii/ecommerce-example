'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Inputs = {
  name: string
}

export default function Page() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post('http://localhost:3004/sections', data)
      .then(() => {
        router.push('/admin/sections')
        router.refresh()
      })
      .catch((err) => alert(JSON.stringify(err)))
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:p-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Section
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Name
                  </label>
                  <div className='mt-2'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <input
                        {...register('name')}
                        type='text'
                        className='block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
