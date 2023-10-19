'use client'

import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import postCategory from '@/fetching/post-category'

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

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    postCategory({
      name: data.name,
    })
      .then(() => router.back())
      .then(() => router.refresh())
      .catch((err) => alert(JSON.stringify(err)))

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Category
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className='mt-10'>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Name
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    {...register('name', { required: true })}
                    type='text'
                    className='block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </div>
                {errors.name && <span>Name is required</span>}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            onClick={() => router.back()}
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
    </Modal>
  )
}
