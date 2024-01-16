import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex justify-center bg-white fixed w-full z-50'>
            <div className='w-full z-10  max-w-[1330px]  '>
                <div className='m-auto flex justify-between items-center'>
                    <div className="logo">
                        <h1 className='text-2xl font-semibold'>
                            Arabic
                        </h1>
                    </div>
                    <div className="flex space-x-6">
                        <div className="">
                            <div className='menu'>
                                <ul className='flex flex-row'>
                                    <li className='' role='button'>
                                        <Link className='px-6 block text-lg font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            TecStaice

                                        </Link>
                                    </li>
                                    <li className='' role='button'>
                                        <Link className='px-6 block text-lg font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            Industic
                                        </Link>
                                    </li>
                                    <li className='' role='button'>
                                        <Link className='px-6 block text-lg font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            Department
                                        </Link>
                                    </li>
                                    <li className='' role='button'>
                                        <Link className='px-6 block text-lg font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            Projects
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-r border-gray-400 my-3">

                        </div>
                        <div className='flex items-center'>
                            <button className='bg-purple-700 text-white px-5 py-2 hover:bg-purple-600 text-md font-bold'>Get Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
