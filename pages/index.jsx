import Image from 'next/image'

import { Categories, Navbar, PostCard, PostWidget } from '../components'
import { getNewPosts } from '../services/posts'

export default function Home({ newPosts }) {
  return (
    <>

      <div className="container mx-auto mb-8 mt-28 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {newPosts.map((post, idx) => (
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
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-[18]">
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
  const newPosts = (await getNewPosts()) || []

  return {
    props: {
      newPosts
    }
  }
}