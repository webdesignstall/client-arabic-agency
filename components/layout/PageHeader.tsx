"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { AlignRight } from 'lucide-react';
import styles from '@/app/Header.module.css';
import MainLogo from '@/assets/img/mainLogo.jpg'
import Image from 'next/image';
import { useLocalization } from "@/context/LocalizeProvider";
import { Oswald } from 'next/font/google';
import axios from 'axios';
import { translate } from '@/utility/translate';
import ModalCall from '../shared/slider-button/ModalCall';

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    weight: "600",
    variable: '--font-oswald',
})

export default function PageHeader() {

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [general, setGeneral] = useState('')


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
    const [headerManu, setHeaderManu] = useState([]);
    const [headerLogo, setHeaderLogo] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/header-menus?populate=*`);
      setHeaderManu(data?.data)
      const logo = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/generals?populate=*`);
      setHeaderLogo(logo?.data?.data[0]?.attributes?.logo?.data?.attributes);
      setGeneral(logo?.data?.data[0]?.attributes);
    })()

  }, [])
  // @ts-ignore
  const logoUrl = headerLogo?.Url
    return (
        <div className={`fixed w-full z-50 lg:px-0 top-0 left-0 bg-white shadow-md`}>
            <div className='z-10 lg:max-w-7xl m-auto w-full px-4'>
                <div className={`m-auto flex justify-between items-center ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                    <div className="logo flex">
                        <div className='px-4 py-6'>
                    

                        <Link href='/'>
                          
                            <h1 className={`${oswald.className} uppercase text-2xl mr-10`}>{
                                translate(general, 'logoName')
                            }</h1>
                        
                        </Link>

                        </div>
                    </div>
                    <div>
                        <div className={`flex items-center justify-end ml-5  gap-5 ${locale === 'en' ? 'pr-3' : 'pr-3'}`}>
                            {
                                locale === 'en' ?
                                    <button onClick={() => switchLocale('ar')} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'> عربي </button>
                                    :
                                    <button onClick={() => switchLocale('en')} className='text-white px-5 py-2 bg-[#23beec] hover:bg-[#23beec] text-md font-bold rounded pointer'>English</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}