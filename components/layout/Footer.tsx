"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {translate} from "@/utility/translate";
import Image from 'next/image'
import barCode from '../../assets/img/barcode.jpg';
import { useLocalization } from "@/context/LocalizeProvider";

export default function Footer() {

  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [office, setOffice] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [teckStacks, setTeckStacks] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [contactUs, setContactUs] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // Adjust breakpoint if needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(()=>{
    // @ts-ignore
    ( async ()=>{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-down-footer-offices?populate=*`);
      setOffice(data?.data)
      const {data: contactUs} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/footer-contact-uses?populate=*`);
      setContactUs(contactUs?.data[0]?.attributes)

      const {data: quickLinks} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/navigatin-links?populate=*`);
      setQuickLinks(quickLinks?.data)

      const {data: techStacks} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-tech-stacks?populate=*`);
      setTeckStacks(techStacks?.data)

      const {data: services} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-services?populate=*`);
      setServices(services?.data)

      const {data: projects} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-projects?populate=*`);
      setProjects(projects?.data)

      const {data: companies} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/top-footer-companies?populate=*`);
      setCompanies(companies?.data)
    })()

  }, [])

  const { locale, switchLocale } = useLocalization();

  // @ts-ignore
  return (
      <div className="md:my-16 md:mx-20 py-5 px-8">
        <div className="hidden md:block">
          <div className={`text-white px-4 py-8 flex flex-col justify-center items-center ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
            <div className="grid grid-cols-5 gap-4 text-sm ">

              {
                quickLinks?.length > 0 ?
                    (
                        <div>
                          <h3 className="font-bold mb-2 lg:text-lg md:text-sm">
                            Quick Link
                          </h3>
                          <ul
                              className=" lg:text-base md:text-xs"
                              style={{ lineHeight: "32px" }}
                          >
                            {
                              quickLinks?.map(link => (
                                  <li>
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
                teckStacks?.length > 0 ?
                    (
                        <div>
                          <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                            TECH STACK
                          </h3>
                          <ul
                              className=" lg:text-base md:text-xs"
                              style={{ lineHeight: "32px" }}
                          >
                            {
                              teckStacks?.map(link => (
                                  <li>
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
                services?.length > 0 ?
                    (
                        <div>
                          <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                            Services
                          </h3>
                          <ul
                              className=" lg:text-base md:text-xs"
                              style={{ lineHeight: "32px" }}
                          >
                            {
                              services?.map(link => (
                                  <li>
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
                projects?.length > 0 ?
                    (
                        <div>
                          <h3 className="font-bold mb-2 lg:text-lg md:text-sm uppercase">
                            Project
                          </h3>
                          <ul
                              className=" lg:text-base md:text-xs"
                              style={{ lineHeight: "32px" }}
                          >
                            {
                              projects?.map(link => (
                                  <li>
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
                            Company
                          </h3>
                          <ul
                              className=" lg:text-base md:text-xs"
                              style={{ lineHeight: "32px" }}
                          >
                            {
                              companies?.map(link => (
                                  <li>
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
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Tech Stack</span>
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
                <div className="grid grid-cols-2 gap-4 mt-3 group-open:animate-fadeIn">
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Back-end</Link>
                      </li>
                      <li>
                        <Link href="/">Java</Link>
                      </li>
                      <li>
                        <Link href="/">PHP</Link>
                      </li>
                      <li>
                        <Link href="/">Android</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Front-end</Link>
                      </li>
                      <li>
                        <Link href="/">React</Link>
                      </li>
                      <li>
                        <Link href="/">Python</Link>
                      </li>
                      <li>
                        <Link href="/">iOS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className={`flex justify-between items-center font-medium cursor-pointer list-none ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                  <span>Industries</span>
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
                <div className="grid grid-cols-2 gap-4 mt-3 group-open:animate-fadeIn">
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Financial Services</Link>
                      </li>
                      <li>
                        <Link href="/">Healthcare</Link>
                      </li>
                      <li>
                        <Link href="/">Logistics</Link>
                      </li>
                      <li>
                        <Link href="/">Travel & Hospitality</Link>
                      </li>
                      <li>
                        <Link href="/">Telecom</Link>
                      </li>
                      <li>
                        <Link href="/">Automotive</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Media & Entertainment</Link>
                      </li>
                      <li>
                        <Link href="/">Manufacturing</Link>
                      </li>
                      <li>
                        <Link href="/">Real Estate</Link>
                      </li>
                      <li>
                        <Link href="/">IGaming</Link>
                      </li>
                      <li>
                        <Link href="/">Retail</Link>
                      </li>
                      <li>
                        <Link href="/">Nonprofit</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className={`flex justify-between items-center font-medium cursor-pointer list-none ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                  <span>Services</span>
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
                <div className="grid grid-cols-2 gap-4 mt-3 group-open:animate-fadeIn">
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Mobile Development</Link>
                      </li>
                      <li>
                        <Link href="/">Web Development</Link>
                      </li>
                      <li>
                        <Link href="/">Quality Assurance</Link>
                      </li>
                      <li>
                        <Link href="/">Staff Augmentation</Link>
                      </li>
                      <li>
                        <Link href="/">Managed Delivery</Link>
                      </li>
                      <li>
                        <Link href="/">Dedicated Team</Link>
                      </li>
                      <li>
                        <Link href="/">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link href="/">DevOps Service</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">DevOps Services</Link>
                      </li>
                      <li>
                        <Link href="/">Business Analysis</Link>
                      </li>
                      <li>
                        <Link href="/">Solution Architecture</Link>
                      </li>
                      <li>
                        <Link href="/">IoT Development Services</Link>
                      </li>
                      <li>
                        <Link href="/">Startups & MVP Service</Link>
                      </li>
                      <li>
                        <Link href="/">SaaS</Link>
                      </li>
                      <li>
                        <Link href="/">Database</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className={`flex justify-between items-center font-medium cursor-pointer list-none ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                  <span>Project</span>
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
                <div className="grid grid-cols-2 gap-4 mt-3 group-open:animate-fadeIn">
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">Verivox</Link>
                      </li>
                      <li>
                        <Link href="/">Management Events</Link>
                      </li>
                      <li>
                        <Link href="/">G Bank</Link>
                      </li>
                      <li>
                        <Link href="/">TUI</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/">TUI</Link>
                      </li>
                      <li>
                        <Link href="/">Exigo</Link>
                      </li>
                      <li>
                        <Link href="/">FTI</Link>
                      </li>
                      <li>
                        <Link href="/">Universkin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className={`flex justify-between items-center font-medium cursor-pointer list-none ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
                  <span>Company</span>
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
                <div className="grid grid-cols-2 gap-4 mt-3 group-open:animate-fadeIn">
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/insights">Insights</Link>
                      </li>
                      <li>
                        <Link href="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/gtc">GTC</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul
                        className="lg:text-base md:text-xs"
                        style={{ lineHeight: "32px" }}
                    >
                      <li>
                        <Link href="/gtc-consultancy">
                          GTC for Consultancy Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/gtc-consultancy-soft">
                          GTC for Consultancy services of UAB «Andersen Soft»
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>


        <div className={`text-white py-12 border-t  border-gray-700 flex justify-between ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
          <div>
            <h2 className="text-xl font-bold mb-4">Our Offices</h2>
            <div className="flex gap-2">
              {office?.map((office, index) => (
                  <div
                      className={` ${
                          index === 3 || (index === 1 && !isMediumScreen)
                              ? "border-r-0"
                              : ""
                      }`}
                      key={index}
                  >
                    <h2 className="font-bold mb-1 lg:text-lg md:text-base">
                      {
                        // @ts-ignore
                        translate(office?.attributes, 'city')
                      }
                    </h2>
                    <div className="text-xs lg:text-base md:text-sm">
                      <p>{
                        // @ts-ignore
                        translate(office?.attributes, 'location')}
                      </p>
                      <p>{
                        // @ts-ignore
                        translate(office?.attributes, 'country')}
                      </p>
                    </div>
                  </div>
              ))}
            </div>

          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">CONTACT US</h2>


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
            <Image src={barCode} width={150} height={150} alt={'OMG ALTHAKAA'} />
          </div>


        </div>
        <div className="mt-8 text-center text-white">
          <div
              className={`lg:flex items-center justify-between px-4 py-6 text-gray-500 border-t border-gray-200 md:grid text-xs lg:text-base md:text-base ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
            <div className="flex items-center  ">
              <p className="font-medium">
                ©2024 OMG ALTHAKAA Inc. All Rights Reserved.
              </p>

            </div>
            <div className={`flex items-center justify-center space-x-4 mt-5 lg:mt-0 ${locale === 'en' ? '' : 'flex-row-reverse'}`}>
              <a href="#">
                <svg
                    width="25"
                    height="25"
                    className="rounded-full w-6 h-6 text-white transition-colors duration-100 ease-in-out hover:text-yellow-500 "
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              <a>
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="rounded-full w-6 h-6 text-white transition-colors duration-100 ease-in-out hover:text-yellow-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                </svg>
              </a>


            </div>
          </div>
        </div>
      </div>
  );
}