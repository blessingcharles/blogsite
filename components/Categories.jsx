import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../services/categories'

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(async () => {
    const categories = await getCategories()
    setCategories(categories)

  }, [])
  return (
    <div className='bg-white p-5 mb-5 shadow-lg'>
      <h1 className='text-center font-bold text-lg lg:text-xl p-1 border-b-2 lg:pb-4 mb-2'>
        Categories
      </h1>
      <div className='flex flex-wrap justify-evenly text-center'>
        {categories.map((category, idx) => (
        
            <Link key={idx} href={category.slug}>
              <span className='cursor-pointer text-zinc-500 block pb-3 m-2 hover:text-zinc-700'>
                {category.name}
              </span>
            </Link>
        ))}
      </div>
    </div>
  )
}
