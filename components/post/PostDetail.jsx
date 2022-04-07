import { title } from 'process'
import React from 'react'
import md from 'markdown-it'
import ReactMarkdown from "react-markdown";

function PostDetail({ post }) {
  return (
    <>
      <div className='bg-white shadow-lg p-2 md:p-8 mb-5'>
        <div className='relative overflow-hidden shadow-md'>
          <img
            className='object-top h-full w-full rounded-t-lg'
            src={post.imgSrc} alt={post.title} />
        </div>
        <div className='mt-10'>
          <ReactMarkdown className='prose max-w-fit text-xs md:text-base'>
            {post.content}
          </ReactMarkdown>

        </div>
      </div>

    </>
  )
}

export default PostDetail