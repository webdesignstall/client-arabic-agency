"use client"

<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import { X } from 'lucide-react';
import { Oswald } from 'next/font/google'
=======
import React from 'react'
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import { X } from 'lucide-react';
import MainLogo from '@/assets/img/mainLogo.jpg'
import Image from 'next/image';
import { useLocalization } from "@/context/LocalizeProvider";

>>>>>>> 609c322 (translation process)
import ModalCall from '../shared/slider-button/ModalCall';
import { store } from '@/redux/store';
import { setArabic, setEnglish } from '@/redux/slice/TranslateSlice';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import {useLocalization} from "@/context/LocalizeProvider";
=======
>>>>>>> 609c322 (translation process)

const oswald = Oswald({
    subsets: ['latin'],
    weight: "600",
    display: 'swap',
    variable: '--font-oswald',
})

export default function Header() {

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [navber, setnavber] = React.useState(false)
    const dispatch = useDispatch()

    const translate = useSelector((state: any) => state.translate.translate)
<<<<<<< HEAD

    const { locale, switchLocale } = useLocalization();
=======
>>>>>>> 609c322 (translation process)

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

    React.useEffect(() => {
        const translate = localStorage.getItem('translate')
        console.log(translate)
        if (translate === 'ar') {
            dispatch(setArabic('ar'))
        }
    }, [translate])

    return (
        <div className={`fixed w-full flex justify-center mx-auto z-50 lg:px-0 top-0 left-0 bg-white `}>
            {
                isScrolled ?
                    <div className={`bg-[#2b2a29bd] backdrop-blur-3xl hidden lg:flex  text-white py-4 absolute top-22 w-full duration-300 `}>
                        <div className='max-w-7xl m-auto'>
                            <div className='flex justify-between items-center'>
                                <ul className='flex'>
                                    <Link href="#scope" className='text-gray-200 hover:text-white duration-300 px-4 py-2' >Areas of expertise</Link>
                                    <Link href="#services" className='text-gray-200 hover:text-white duration-300 px-4 py-2' >Services</Link>
                                    <Link href="#project" className='text-gray-200 hover:text-white duration-300 px-4 py-2' >Project</Link>
                                    <Link href="#technologies" className='text-gray-200 hover:text-white duration-300 px-4 py-2' >Technologies</Link>
                                    <Link href="#testimonials" className='text-gray-200 hover:text-white duration-300 px-4 py-2' >Testimonials</Link>
                                </ul>
                                <div className=''>
                                    <ModalCall />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`bg-white backdrop-blur-3xl   text-black absolute top-22 w-full px-16 m-auto duration-300 `}>
                        <div className='m-auto flex justify-between items-center'>
                            <div className="logo flex">
<<<<<<< HEAD

                                    <Link href='/'>
                                       <h1 className={`${oswald.className} uppercase text-2xl text-[#494F55]`}>Omg Althakaa</h1>
                                    </Link>

=======
                                <div>
                                    <Link href='/'>
                                        <Image
                                            src={MainLogo}
                                            alt=''
                                            width={90}
                                            height={70}
                                        />
                                    </Link>
                                </div>
>>>>>>> 609c322 (translation process)
                            </div>
                            <div className="lg:flex space-x-6 hidden">
                                <div className="">
                                    <div className='menu'>
                                        <ul className='flex flex-row'>
                                            <li className='rotated_id' role='button'>
                                                <Link href="#scope" className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]'>
                                                    <div className='flex relative'>
                                                        <button>Areas of expertise</button>

                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='rotated_id' role='button'>
                                                <Link href="#services" className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]'>
                                                    <div className='flex relative'>
                                                        <button>Services</button>

                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='rotated_id' role='button'>
                                                <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href="#project">
                                                    <div className='flex relative'>
                                                        <button>Project</button>

                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='rotated_id' role='button'>
                                                <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href="#technologies">
                                                    <div className='flex relative'>
                                                        <button>Technologies</button>

                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='rotated_id' role='button'>
                                                <Link className='px-4 block text-md font-normal py-6 relative before:absolute before:hover:border before:bottom-0 before:w-0 before:hover:w-full before:left-0 before:duration-300 before:border-[#23beec]' href="#testimonials">
                                                    <div className='flex relative'>
                                                        <button>Testimonials</button>

                                                    </div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='flex items-center pl-3 gap-5'>
                                    <button className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded'>Testimonials</button>
<<<<<<< HEAD
                                    {/*{
                                        translate === 'en' ?
                                            <button onClick={() => store.dispatch(setArabic('ar'))} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>Arabic</button>
                                            :
                                            <button onClick={() => store.dispatch(setEnglish('en'))} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>English</button>
                                    }*/}

                                    {
                                        locale === 'en' ?
                                            <button onClick={() => switchLocale('ar')} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>Arabic</button>
                                            :
                                            <button onClick={() => switchLocale('en')} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>English</button>
=======
                                    {
                                        translate === 'en' ?
                                            <button onClick={() => store.dispatch(setArabic('ar'))} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>Arabic</button>
                                            :
                                            <button onClick={() => store.dispatch(setEnglish('en'))} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>English</button>
>>>>>>> 609c322 (translation process)
                                    }
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
            }

        </div>
    )
}