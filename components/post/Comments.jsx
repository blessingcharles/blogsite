import React, { useEffect, useState } from 'react'
import { getSlugComments } from '../../services/comments'

function Comments({slug}) {
  const [comments , setComments] = useState([])

  useEffect(async ()=>{
    const results = await getSlugComments(slug)
    setComments(results)
  }, [])

  return (
    <div>
      {comments.length > 0 && (
        <div>
          
        </div>
      )}
    </div>
  )
}

export default Comments