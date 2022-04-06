import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    let links = [
        { name: "HOME", url: "/" },
        { name: "BLOG", url: "/" },
        { name: "ABOUT", url: "/" },
        { name: "GITHUB", url: "/" },
    ]

    const [isNavbarOpen , setIsNavbarOpen ] = useState(false)

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-gray-500 z-50'>
            <div className='md:flex items-center justify-between bg-gray-300 py-4 px-5'>

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
                    <span className='text-3xl mr-3 pt-2'>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </span>
                    Thomas
                </div>
                
                <div onClick={()=> setIsNavbarOpen(!isNavbarOpen)} className='text-3xl md:hidden absolute right-8 top-6 cursor-pointer'>
                    <ion-icon name={isNavbarOpen ?"close" : "apps-outline"}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center absolute pl-8  md:pl-0 transition-all duration-500 ease-in
                                md:static bg-gray-300 md:z-auto z-[-1] w-full left-0 md:w-auto 
                                ${isNavbarOpen ? 'top-16' : 'top-[-500px]' }`}>
                    {links.map((link, idx) => (
                        <li key={idx} className="md:ml-8 md:text-xl my-7 md:my-0">
                            <Link href={link.url}>
                                <a className='text-gray-800 hover:text-gray-400 duration-500 font-medium'>{link.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Navbar