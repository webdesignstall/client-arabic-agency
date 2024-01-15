import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <div>
            <div className='shadow py-4 fixed top-0 w-full z-10 bg-white'>
                <div className='px-8 m-auto flex justify-between items-center'>
                    <div className="logo">
                        <h1 className='text-2xl font-semibold'>
                            Arabic
                        </h1>
                    </div>
                    <div className="flex space-x-6">
                        <div className="">
                            <ul className="flex text-lg font-medium">
                                {
                                    ['Production', 'Project', 'Development', 'Development'].map((item, index) => (
                                        <li key={index} className="flex px-4 cursor-pointer before:hover:border before:absolute before:bottom-0 before:hover:w-28 before:duration-300 before:w-0 before:border-purple-700 py-2 rounded-md">
                                            {item} <span className='px-2 mt-2'><ChevronDown size={15} /></span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="border-r border-gray-400 my-3">

                        </div>
                        <div className="px-4">
                            <Button className="rounded-none px-6 py-6 text-md font-bold">Get pricing</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
