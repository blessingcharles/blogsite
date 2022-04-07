import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getSlugComments } from '../../services/comments'

function Comments({ slug }) {
  const [comments, setComments] = useState([])

  useEffect(async () => {
    const results = await getSlugComments(slug)
    setComments(results)
  }, [])

  return (
    <div>
      {comments.length > 0 && (
        <div className='bg-white shadow-lg mt-5'>
          <h2 className='p-5 font-semibold text-md'>
            {comments.length + " Comments"}
          </h2>
          {comments.map((comment, idx) => (
            <div key={idx} className='m-3 py-3 border-b'>
              <div className='flex items-center justify-between mb-3'>
                <span className='break-all pr-3 font-semibold'>
                  {comment.name}
                </span>
                <p className='text-zinc-500'>
                  {moment(comment.commentedAt).format("MMMM DD , YYYY")}

                </p>
              </div>

              <p className='text-gray-700'>
                {comment.comment
                
                }
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments