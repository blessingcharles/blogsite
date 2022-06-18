import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getSimilarPosts, getFeaturedPosts } from '../services/posts'

export default function PostWidget({ slug, categories }) {

  const [widgetPosts, setWidgetPosts] = useState([])

  useEffect(async () => {
    if (slug) {
      const relatedPosts = await getSimilarPosts(slug, categories)
      setWidgetPosts(relatedPosts)
    }
    else {
      const featuredPosts = await getFeaturedPosts()
      setWidgetPosts(featuredPosts)
    }
  }, [])
  return (
    <div className='bg-white p-10 mb-5 shadow-lg'>
      <h1 className='text-center font-bold text-lg lg:text-xl p-1 border-b-2 lg:pb-4 mb-2'>
        {slug ? "Similar Posts" : "Featured Posts"}
      </h1>
      {
        widgetPosts.map((post, idx) => (
          <div key={idx} className="flex items-center w-full mb-5">
            <div className='w-16 flex-none ml-2'>
              <img
                className='h-10 w-10 rounded-full'
                src={post.imgSrc} alt={post.title} />

            </div>
            <div>
              <Link href={"/post/" + post.slug} key={post.title} >
                <span className='hover:text-zinc-700 cursor-pointer'>{post.title}</span>
              </Link>
              <div className='text-sm'>
                <span className='mr-2 text-zinc-500'>{moment(post.updatedAt).format('MMMM DD, YYYY')}</span>
                <ion-icon name="calendar"></ion-icon>

              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
