import Head from 'next/head'
import Image from 'next/image'

import { Categories, Navbar, PostCard, PostWidget } from '../components'
import {getNewPosts} from '../services/posts'

export default function Home({newPosts}){
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

      <Head>
        <title>Thomas Blog</title>
      </Head>
      <Navbar />

      <div className="container mx-auto mb-8 mt-28 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {newPosts.map((post, idx) => (
              <PostCard
                url={post.url}
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
            <div className="relative top-8 lg:fixed lg:top-32">
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