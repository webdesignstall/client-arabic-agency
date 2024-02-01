"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { translate } from "@/utility/translate";
import { useLocalization } from "@/context/LocalizeProvider";

export default function Footer() {

  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [quickLinks, setQuickLinks] = useState([]);
  const [teckStacks, setTeckStacks] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [socialIcons, setSocialIcons] = useState([]);
  const [contactUs, setContactUs] = useState({});
  const [general, setGeneral] = useState({});
  const {locale} = useLocalization();

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // Adjust breakpoint if needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data: contactUs } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/footer-contact-uses?populate=*`);
      setContactUs(contactUs?.data[0]?.attributes)

      const { data: quickLinks } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/navigatin-links?populate=*`);
      setQuickLinks(quickLinks?.data)

      const { data: techStacks } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-tech-stacks?populate=*`);
      setTeckStacks(techStacks?.data)

      const { data: services } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-services?populate=*`);
      setServices(services?.data)

      const { data: projects } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-projects?populate=*`);
      setProjects(projects?.data)

      const { data: companies } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-companies?populate=*`);
      setCompanies(companies?.data)

      const { data: socialIcons } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/fotter-social-medias?populate=*`);
      setSocialIcons(socialIcons?.data)

      const { data: general } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/generals?populate=*`);
      setGeneral(general?.data[0]?.attributes)
    })()

  }, [])


  // @ts-ignore
  return (
    <div className="md:my-16 md:mx-20 py-5 px-8">
      <div className="hidden md:block">
        <div className={`text-white px-4 py-8 `}>
          <div className={`flex flex-row justify-between`}>

            {
              quickLinks?.length > 0 ?
                (
                  <div>
                    <h3 className="font-bold mb-2 lg:text-lg md:text-sm">
                    {
                        locale !== 'en' ? "رابط سريع" : "Quick Link"
                      }

                    </h3>
                    <ul
                      className=" lg:text-base md:text-xs"
                      style={{ lineHeight: "32px" }}
                    >
                      {
                        quickLinks?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link 
                            href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }

                    </ul>
                  </div>
                )
                : ''
            }

            {
              teckStacks?.length > 0 ?
                (
                  <div>
                    <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                    {
                        locale !== 'en' ? "مكدس التكنولوجيا" : "TECH STACK"
                      }
                    </h3>
                    <ul
                      className=" lg:text-base md:text-xs"
                      style={{ lineHeight: "32px" }}
                    >
                      {
                        teckStacks?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link 
                            
                          
                            href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
                : ''
            }

            {
              services?.length > 0 ?
                (
                  <div>
                    <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                    {
                        locale !== 'en' ? "خدمات" : "SERVICES"
                      }
                    </h3>
                    <ul
                      className=" lg:text-base md:text-xs"
                      style={{ lineHeight: "32px" }}
                    >
                      {
                        services?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link 
                            
                            href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
                : ''
            }

            {
              projects?.length > 0 ?
                (
                  <div>
                    <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                      {
                        locale !== 'en' ? "مشروع" : "PROJECT"
                      }
                    </h3>
                    <ul
                      className=" lg:text-base md:text-xs"
                      style={{ lineHeight: "32px" }}
                    >
                      {
                        projects?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
                : ''
            }

            {
              companies?.length > 0 ?
                (
                  <div>
                    <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                    {
                locale !== 'en' ? "شركة" : "COMPANY"
              }   
                    </h3>
                    <ul
                      className=" lg:text-base md:text-xs"
                      style={{ lineHeight: "32px" }}
                    >
                      {
                        companies?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
                : ''
            }



          </div>
        </div>
      </div>

      <div className="start accordio">
        <div className="block md:hidden text-white divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          
          <div className="py-5">
            <details className="group">
              <summary className={`flex justify-between items-center font-medium cursor-pointer list-none 
              
               
              `}>
                <span>
                {
                locale !== 'en' ? "شركة" : "COMPANY"
              }  

                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 group-open:animate-fadeIn">
                  <ul
                     
                    style={{ lineHeight: "32px" }}
                  >
                    {
                        companies?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link  href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                  </ul>
                </div>
            </details>
          </div>
          
          <div className="py-5">
            <details className="group">
              <summary className={`flex justify-between items-center font-medium cursor-pointer list-none `}>
                <span>
                {
                locale !== 'en' ? "مشروع" : "PROJECT"
              }  

                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 group-open:animate-fadeIn">
                  <ul
                    style={{ lineHeight: "32px" }}
                  >
                    {
                        projects?.map((link:any, index:number) => (
                          <li key={index}>
                            <Link href={link}>{
                              // @ts-ignore
                              translate(link?.attributes, 'title')
                            }</Link>
                          </li>
                        ))
                      }
                  </ul>
                </div>
            </details>
          </div>
          <div className="py-5 ">
            <details className="group">
              <summary className={`flex justify-between items-center font-medium cursor-pointer list-none`}>
                <span>

                {
                        locale !== 'en' ? "خدمات" : "SERVICES"
                      }
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 group-open:animate-fadeIn">
                  <ul
                     
                    style={{ lineHeight: "32px" }}
                  >{
                    services?.map((link:any, index:number) => (
                      <li key={index}>
                        <Link href={link}>{
                          // @ts-ignore
                          translate(link?.attributes, 'title')
                        }</Link>
                      </li>
                    ))
                  }
                  </ul>
                </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className={`flex justify-between items-center font-medium cursor-pointer list-none`}>
                <span>
                {
                        locale !== 'en' ? "مكدس التكنولوجيا" : "TECH STACK"
                      }

                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 group-open:animate-fadeIn">

                  <ul
                  
                    style={{ lineHeight: "32px" }}
                  >{
                    teckStacks?.map((link:any, index:number) => (
                      <li key={index}>
                        <Link href={link}>{
                          // @ts-ignore
                          translate(link?.attributes, 'title')
                        }</Link>
                      </li>
                    ))
                  }
                  </ul>
                </div>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className={`flex justify-between items-center font-medium cursor-pointer list-none `}>
                <span>
                {
                        locale !== 'en' ? "رابط سريع" : "Quick Link"
                      }

                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 group-open:animate-fadeIn">

                  <ul
                     
                    style={{ lineHeight: "32px" }}
                  >{
                    quickLinks?.map((link:any, index:number) => (
                      <li key={index}>
                        <Link href={link}>{
                          // @ts-ignore
                          translate(link?.attributes, 'title')
                        }</Link>
                      </li>
                    ))
                  }
                  </ul>
                </div>
            </details>
          </div>
        </div>
      </div>


      <div className={`text-white py-12 border-t  border-gray-700 flex flex-col md:flex-row gap-7 justify-between  `}>
        <div>
          <h2 className="text-xl font-bold mb-4">
          {
                locale !== 'en' ? "مكاتبنا" : "Our Office"
              }   
          
          </h2>
          <div className="flex gap-2">

            <div
            >
              <div className="text-xs lg:text-base md:text-sm">
                <p>{
                  // @ts-ignore
                  translate(contactUs, 'physicalAddress')}
                </p>

              </div>
            </div>

          </div>

        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">

              {
                locale !== 'en' ? "اتصل بنا" : "CONTACT US"
              }    
            
          </h2>


          <div>

            <p className="hover:text-yellow-300 cursor-pointer flex">
              <svg
                width="20"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 text-lg text-yellow-400"
              >
                <path
                  d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>

                {translate(contactUs, 'phoneNumber')}
              </span>
            </p>


            <p className="hover:text-yellow-300 cursor-pointer flex mt-2">
              <svg
                width="20"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 text-lg text-yellow-400"
              >
                <path
                  d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>

                {translate(contactUs, 'email')}
              </span>
            </p>

          </div>
        </div>
        <div>
          <img src={
            // @ts-ignore
            process.env.NEXT_PUBLIC_BACKED_BASE + contactUs?.qrcode?.data?.attributes?.formats?.thumbnail?.url} width={150} height={150} alt={'OMG ALTHAKAA'} />
        </div>


      </div>
      <div className="mt-8 text-center text-white">
        <div
          className={`lg:flex items-center justify-between px-4 py-6 text-gray-500 border-t border-gray-200 md:grid text-xs lg:text-base md:text-base`}>
          <div className="flex items-center  ">
            <p className="font-medium">
             {translate(general, 'footerCopyRight')}
            </p>

          </div>


          <div className={`flex items-center justify-center gap-3 mt-5 lg:mt-0`}>

            {
              socialIcons?.map(icon => (
                <a target='_blank' href={
                  // @ts-ignore
                  icon?.attributes?.link ? icon?.attributes?.link : '#'}>
                  <img width={'20'} src={
                    // @ts-ignore
                    process.env.NEXT_PUBLIC_BACKED_BASE + icon?.attributes?.socialIcon?.data?.attributes?.formats?.small?.url
                  } alt="" />
                </a>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}