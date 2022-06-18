import Image from 'next/image'
import { useState } from 'react'

import { Categories, Navbar, PostCard, PostWidget } from '../components'
import { getNewPosts } from '../services/posts'


export default function Home({ newPosts }) {
  const [currentPosts, setCurrentPosts] = useState(newPosts || []);

  const loadMorePosts = async ()=>{
    const nextPostId = currentPosts.length ;
    const posts = await getNewPosts(nextPostId);

    setCurrentPosts((curr) => [...curr , ...posts])
  }


  return (
    <>
      <div className="container mx-auto mb-8 mt-28 px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {currentPosts.map((post, idx) => (
              <PostCard
                slug={post.slug}
                imgSrc={post.imgSrc}
                title={post.title}
                description={post.description}
                key={idx}
                authorImgUrl={post.authorImgUrl}
                authorName={post.authorName}
                updatedAt={post.updatedAt}
              />
            ))}
            <div className='flex justify-center items-center'>

              <span onClick={loadMorePosts} className='transition duration-500 transform hover:-translate-y-1 hover:bg-slate-100 px-5 py-3 bg-gray-500 rounded-lg hover:border-4 cursor-pointer'>
                More Posts
              </span>
            </div>
          </div>

          <div className='col-span-1 lg:col-span-4 '>
          <div className='relative lg:sticky top-12'>
            <PostWidget />
            <Categories />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const newPosts = (await getNewPosts(0)) || []

  return {
    props: {
      newPosts
    },
    revalidate: 6000
  }
}