"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import { X } from 'lucide-react';
import styles from '@/app/Header.module.css';
import MainLogo from '@/assets/img/mainLogo.jpg'
import Image from 'next/image';
import { useLocalization } from "@/context/LocalizeProvider";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ModalCall from '../shared/slider-button/ModalCall';


export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [navber, setnavber] = React.useState(false)


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

    const { locale, switchLocale } = useLocalization();


    const handleLocaleSwitch = (newLocale: string) => {
        switchLocale(newLocale);
    };
    'z-10 lg:max-w-7xl m-auto w-full  px-4'
    return (
        <div className={`fixed w-full flex justify-center mx-auto z-50 lg:px-0 top-0 left-0 bg-white ${styles.header} ${visible ? `${styles.visible}` : ''}`}>
            <div className={`bg-white backdrop-blur-3xl   text-black absolute top-22 w-full px-16 m-auto duration-300  ${isScrolled ? 'opacity-0': 'opacity-100'}`}>
                <div className='m-auto flex justify-between items-center'>
                    <div className="logo flex">
                        <div>
                        <Link href='/'>
                            <Image
                                src={MainLogo}
                                alt=''
                                width={70}
                                height={70}
                            />
                        </Link>
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
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href='/'>
                                            <div className='flex relative'>
                                                <button>Areas of expertise</button>
                                                
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href='/'>
                                            <div className='flex relative'>
                                                <button>Services</button>
                                                
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href='/'>
                                            <div className='flex relative'>
                                                <button>Project</button>
                                                
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='rotated_id' role='button'>
                                        <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href='/'>
                                            <div className='flex relative'>
                                                <button>Technologies</button>
                                                
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-r border-gray-400 my-6">

                        </div>
                        <div className='flex items-center pl-3'>
                            <button className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded'>Testimonials</button>
                        </div>
                    </div>
                    <div className='lg:hidden flex'>
                        <div>
                            <div className='p-1'>
                                <button onClick={() => setnavber(!navber)} className='p-4 duration-300 transition-all transform '>
                                    {
                                        navber ? <X size={30} /> : <AlignRight size={30} />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-[#2b2a29bd] backdrop-blur-3xl hidden lg:flex  text-white py-4 absolute top-22 w-full duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className='max-w-7xl m-auto'>
                    <div className='flex justify-between items-center'>
                        <ul className='flex'>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#scope">Areas of expertise</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#services">Services</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#project">Project</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#technologies">Technologies</a></li>
                            <li><a className='text-gray-200 hover:text-white duration-300 p-4' href="#testimonials">Testimonials</a></li>
                        </ul>
                        <div className=''>
                            <ModalCall/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}