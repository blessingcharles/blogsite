import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../../services/comments'

function CommentsForm({ slug }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: false
  })

  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentSubmissionHandler = async (e) => {

    setError(false)

    const { name, email, comment, storeData } = formData

    console.log(storeData, name, email, comment)

    if (!name || !email || !comment) {
      setError(true)
      return
    }
    if (storeData) {
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
    }
    else {
      localStorage.removeItem("name")
      localStorage.removeItem("email")
    }
    try {
      const results = await submitComment(name, email, comment, slug)
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    }
    catch (err) {
      setError(true)
    }
  }

  const onInputChange = ({ target }) => {
    if (target.type == "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked
      })
      )
    }
    else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value
      }))
    }

  }

  useEffect(() => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    if (name && email) {
      setFormData((prevState) => ({
        ...prevState,
        name,
        email
      }))
    }
  }, [])

  return (
    <div className='bg-white shadow-lg my-2 p-5'>
      <h3 className='text-lg font-bold text-center border-b-2'>
        Comments Form
      </h3>
      <div className='grid grid-cols-1 gap-4 mt-3'>
        <div className='w-full'>
          <textarea
            onChange={onInputChange}
            className='w-full bg-gray-100 outline-none rounded-lg focus:outline  text-gray-700 py-2'
            name="comment"
            value={formData.comment}
            id=""
            placeholder=' Your Comments' />

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10'>
          <input
            value={formData.name}
            onChange={onInputChange}
            className='bg-gray-100 py-1 px-2 lg:text-xl'
            type="text"
            name="name"
            placeholder='Name'
          />
          <input
            value={formData.email}
            className='bg-gray-100 py-1 px-2 lg:text-xl'
            onChange={onInputChange}
            type="email"
            name="email"
            placeholder='Email' />

        </div>
        <div>

          <input
            checked={formData.storeData}
            type="checkbox"
            onChange={onInputChange}
            name="storeData"
            value="true" />

          <span className='text-gray-400 ml-2'>Remember me for the next time </span>
        </div>
        {error &&
          <p className='text-xs text-red-500'>
            All Fields are required
          </p>}
        <div className='w-full text-center'>
          <button
            className='border-2 px-4 py-2 bg-zinc-500 text-white rounded-2xl transition duration-500 hover:-translate-y-2 hover:bg-blue-400'
            onClick={commentSubmissionHandler}>
            Submit
          </button>
          {showSuccessMessage &&
            <p className='text-xs text-green-600 mt-3'>
              Comment Submitted Successfully
            </p>}
        </div>
      </div>
    </div>
  )
}

export default CommentsForm