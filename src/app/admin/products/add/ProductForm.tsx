'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { Category, Item, Section } from '@/types'

type Inputs = {
  name: string
  categoryId: string[]
  sectionId: string[]
  itemId: string[]
}

export default function ProductForm({
  categories,
  sections,
  items,
}: {
  categories: Category[]
  sections: Section[]
  items: Item[]
}) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      categoryId: [],
      sectionId: [],
      itemId: [],
    },
  })

  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  //   axios
  //     .post('http://localhost:3004/products', data)
  //     .then(() => {
  //       router.push('/admin/sections')
  //       router.refresh()
  //     })
  //     .catch((err) => alert(JSON.stringify(err)))
  // }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // alert(JSON.stringify(data))
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:p-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Product
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='name'
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

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <fieldset>
                  <legend className='text-base font-semibold leading-6 text-gray-900'>
                    Categories
                  </legend>
                  <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className='relative flex items-start py-4'
                      >
                        <div className='min-w-0 flex-1 text-sm leading-6'>
                          <label
                            htmlFor={`category-${category.id}`}
                            className='select-none font-medium text-gray-900'
                          >
                            {category.name}
                          </label>
                        </div>
                        <div className='ml-3 flex h-6 items-center'>
                          <input
                            id={`category-${category.id}`}
                            {...register('categoryId')}
                            value={category.id}
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <fieldset>
                  <legend className='text-base font-semibold leading-6 text-gray-900'>
                    Sections
                  </legend>
                  <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                    {sections.map((section, index) => (
                      <div
                        key={index}
                        className='relative flex items-start py-4'
                      >
                        <div className='min-w-0 flex-1 text-sm leading-6'>
                          <label
                            htmlFor={`section-${section.id}`}
                            className='select-none font-medium text-gray-900'
                          >
                            {section.name}
                          </label>
                        </div>
                        <div className='ml-3 flex h-6 items-center'>
                          <input
                            id={`section-${section.id}`}
                            {...register('sectionId')}
                            value={section.id}
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <fieldset>
                  <legend className='text-base font-semibold leading-6 text-gray-900'>
                    Items
                  </legend>
                  <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className='relative flex items-start py-4'
                      >
                        <div className='min-w-0 flex-1 text-sm leading-6'>
                          <label
                            htmlFor={`item-${item.id}`}
                            className='select-none font-medium text-gray-900'
                          >
                            {item.name}
                          </label>
                        </div>
                        <div className='ml-3 flex h-6 items-center'>
                          <input
                            id={`item-${item.id}`}
                            {...register('itemId')}
                            value={item.id}
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
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
