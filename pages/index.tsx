import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Categories, Navbar, PostCard, PostWidget } from '../components'

const posts = [
  {
    title: 'Testing things 1 junker junker junker junker junker hey junker is it ?',
    description: 'this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..this is post 1 possible junk ..',
    imgSrc:
      'https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1509&q=80',
    url: '/',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04xddddddddd',
  },
  {
    title: 'Testing things 2',
    description: 'this is post 2 possible junk ..',
    imgSrc:
      'https://www.theinspiringjournal.com/ezoimgfmt/i0.wp.com/www.theinspiringjournal.com/wp-content/uploads/2020/11/motivational-quotes-with-images.jpg?w=640&ssl=1&ezimgfmt=ng:webp/ngcb1',
    url: '/',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: 'Fri Apr 12 2021 19:08:55 GMT-0500 (CDT)',
    authorName: 'th3h04x',
  },
  {
    title: 'Testing things 3',
    description: 'this is post 3 possible junk ..',
    url: '/',
    authorImgUrl:
      'https://media.istockphoto.com/photos/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-picture-id1188445864',
    updatedAt: '1649256517683',
    authorName: 'th3h04x',
  },
]

const Home: NextPage = () => {
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
            {posts.map((post, idx) => (
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

export default Home
