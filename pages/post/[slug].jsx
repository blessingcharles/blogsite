import React from 'react';

import {
  Author,
  Comments,
  CommentsForm,
  PostDetail,
} from '../../components/post';

import { PostWidget, Categories } from '../../components'
import { getAllPosts, getPostDetails } from '../../services/posts';
const PostDetails = ({ post }) => {

  return (
    <div className='container mx-auto px-10 mb-8 mt-24'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

        <div className='col-span-1 lg:col-span-8'>
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>

        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-12'>
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>
    </div>
  )
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  return {
    paths: posts.map(({  slug  }) => ({ params: { slug } })),
    fallback: true,
  };
}