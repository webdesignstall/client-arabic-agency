"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import styles from '@/app/Header.module.css';
import MainLogo from '@/assets/img/mainLogo.jpg'
import Image from 'next/image';
import { useLocalization } from "@/context/LocalizeProvider";


export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    const [isScrolled, setIsScrolled] = React.useState(false);


    React.useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY > 0;
            setIsScrolled(top);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { locale, switchLocale } = useLocalization();




    const handleLocaleSwitch = (newLocale: string) => {
        switchLocale(newLocale);
    };

    return (
        <div className={`fixed w-full z-50 lg:px-0 top-0 left-0 bg-white ${styles.header} ${visible ? `${styles.visible}` : ''}`}>
            <div className='z-10 lg:max-w-7xl m-auto w-full  px-4'>
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
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Tech Stack</button>
                                                <div className='py-3 px-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Industries</button>
                                                <div className='py-3 px-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Services</button>
                                                <div className='py-3 px-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Company</button>
                                                <div className='py-3 px-1'>
                                                    <ChevronDown className='rotated duration-300 text-gray-600' size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-purple-700' href='/'>
                                            <div className='flex relative'>
                                                <button>Project</button>
                                                <div className='py-3 px-1'>
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

                        <div>
                            <button onClick={() => handleLocaleSwitch('ar')}>Arabic</button>
                            <button onClick={() => handleLocaleSwitch('en')}>English</button>
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
            <div className={`bg-[#2b2a29bd] hidden lg:block backdrop-blur-3xl  text-white py-4 absolute top-22 w-full duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className='max-w-7xl m-auto'>
                    <div>
                        <ul className='flex'>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#scope">Areas of expertise</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#services">Services</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#project">Project</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#technologies">Technologies</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
