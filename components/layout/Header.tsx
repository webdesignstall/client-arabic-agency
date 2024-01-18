"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import styles from '@/app/Header.module.css';
import MainLogo from '@/assets/img/mainLogo.jpg'
import Image from 'next/image';

export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const scrollingUp = currentScrollPos < prevScrollPos;

        setVisible(scrollingUp || currentScrollPos < 10); // Show the header if scrolling up or at the top
        setPrevScrollPos(currentScrollPos);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={` fixed bg-white px-4 z-50 lg:px-0 w-full top-0 left-0 ${styles.header} ${visible ? `${styles.visible} shadow` : ''}`}>
            <div className='z-10 lg:max-w-7xl m-auto w-full'>
                <div className='m-auto flex justify-between items-center'>
                    <div className="logo flex">
                        <div>
                            <Image
                                src={MainLogo}
                                alt=''
                                width={70}
                                height={70}
                            />
                        </div>
                        {/* <h1 className='lg:text-2xl font-semibold text-xl flex justify-center items-center'>
                            Arabic
                        </h1> */}
                    </div>
                    <div className="lg:flex space-x-6 hidden">
                        <div className="">
                            <div className='menu'>
                                <ul className='flex flex-row'>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-6 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Institute</button>
                                                <div className='p-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-r border-gray-400 my-6">

                        </div>
                        <div className='flex items-center pl-3'>
                            <button className='bg-purple-700 text-white px-5 py-2 hover:bg-purple-600 text-md font-bold'>Get Pricing</button>
                        </div>
                    </div>
                    <div className='lg:hidden flex'>
                        <div>
                            <div className='p-1'>
                                <button className='p-4'><AlignRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
