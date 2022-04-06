import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export default function PostCard({ title, description, imgSrc, slug, authorImgUrl, authorName, updatedAt }) {
    return (
        <div className='bg-white shadow-xl pb-5 lg:p-10 mb-10 hover:shadow-slate-400 transition duration-700'>

            <div className='mb-10 shadow-lg relative overflow-hidden'>
                <img
                    className='h-56 md:h-96 w-full'
                    src={imgSrc} alt={title} />
            </div>
            <h1 className='transition duration-700 text-center mb-4 md:mb-0 cursor-pointer
                hover:text-gray-500 text-xl md:text-2xl font-semibold px-1'>
                <Link href={"/post/" + slug}>
                    {title}
                </Link>
            </h1>
            <div className='block lg:flex justify-between text-center'>

                <div className='flex items-center justify-center mb-4 w-full lg:w-auto mr-8 '>
                    <img
                        className='rounded-full h-10 w-10 sm:h-14 sm:w-14 align-middle'
                        src={authorImgUrl} alt={authorName} />
                        <p className='text-sm md:text-md ml-1 lg:ml-5 mt-3'>
                            {authorName}
                        </p>
                </div>
                <div className='flex items-center justify-center lg:justify-between text-2xl text-gray-700'>
                    <ion-icon name="calendar"></ion-icon>
                    <p className='text-sm ml-2'>{moment(updatedAt).format('MM DD, YYYY')}</p>
                </div>
            </div>
            <p className='px-2 lg:px-0 text-center pt-3'>
                {description}
            </p>
            <div className='text-center mt-5'>
                <Link href={"post/" + slug}>
                    <span className='transition duration-500 transform hover:-translate-y-1 hover:bg-blue-400 inline-block px-5 py-3 bg-slate-500 rounded-full cursor-pointer'>
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}
