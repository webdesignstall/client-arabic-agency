"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {translate} from "@/utility/translate";
export default function Footer() {

  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [office, setOffice] = useState([]);
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
    })()

  }, [])

  // @ts-ignore
  return (
      <div className="md:my-16 md:mx-20 py-5 px-8">
        <div className="hidden md:block">
          <div className=" text-white px-4 py-8 flex flex-col justify-center items-center">
            <div className="grid grid-cols-5 gap-4 text-sm ">
              <div>
                <h3 className="font-bold mb-2 lg:text-lg md:text-sm">
                  Quick Link
                </h3>
                <ul
                    className=" lg:text-base md:text-xs"
                    style={{ lineHeight: "32px" }}
                >
                  <li>
                    <Link href="/">Back-end</Link>
                  </li>
                  <li>
                    <Link href="/">Front-end</Link>
                  </li>
                  <li>
                    <Link href="/">Android</Link>
                  </li>
                  <li>
                    <Link href="/">iOS</Link>
                  </li>
                  <li>
                    <Link href="/">Java</Link>
                  </li>
                  <li>
                    <Link href="/">PHP</Link>
                  </li>
                  <li>
                    <Link href="/">React</Link>
                  </li>
                  <li>
                    <Link href="/">Python</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 lg:text-lg md:text-sm">
                  Industries
                </h3>
                <ul
                    className=" lg:text-base md:text-xs"
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
              <div>
                <h3 className="font-bold mb-2 lg:text-lg md:text-sm">Services</h3>
                <ul
                    className=" lg:text-base md:text-xs"
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

              <div>
                <h3 className="font-bold mb-2 lg:text-lg md:text-sm">Project</h3>
                <ul
                    className=" lg:text-base md:text-xs"
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
              <div>
                <h3 className="font-bold mb-2 lg:text-lg md:text-sm">Company</h3>
                <ul
                    className=" lg:text-base md:text-xs"
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
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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

        <div className="text-white py-12 border-t border-b border-gray-700">
          <h2 className="text-xl font-bold mb-4">Our Offices</h2>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
            {office?.map((office, index) => (
                <div
                    className={`p-4 border-r border-gray-700 ${
                        index === 3 || (index === 1 && !isMediumScreen)
                            ? "border-r-0"
                            : ""
                    }`}
                    key={index}
                >
                  <h2 className="font-bold mb-4 lg:text-lg md:text-base">
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
        <div className="text-white py-12 border-t  border-gray-700">
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2>

          <div className="lg:text-base lg:flex justify-between w-2/3 sm:grid text-sm">
            <div>
              {" "}
              <p className="hover:text-yellow-300 cursor-pointer flex">
                <svg
                    width="20"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-lg text-yellow-400"
                >
                  <path
                      d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                </svg>
                {translate(contactUs, 'phoneNumber')}
              </p>
            </div>
            <div>
              <p className="hover:text-yellow-300 cursor-pointer flex">
                <svg
                    width="20"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-lg text-yellow-400"
                >
                  <path
                      d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                </svg>
                {translate(contactUs, 'email')}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <div className="lg:flex items-center justify-between px-4 py-6 text-gray-500 border-t border-gray-200 md:grid text-xs lg:text-base md:text-base">
            <div className="flex items-center  ">
              <p className="font-medium">
                ©2024 Andersen Inc. All Rights Reserved.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              <span className="mx-1">|</span>
              <a href="#" className="text-blue-500 hover:underline">
                Cookies Policy
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-5 lg:mt-0">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                      fill="currentColor"
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
              <a>
                <svg
                    width="15"
                    height="15"
                    className="rounded-full w-6 h-6 text-white transition-colors duration-100 ease-in-out hover:text-yellow-500"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                      fill="currentColor"
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
                      d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                  <path
                      d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                  <path
                      d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
                  <path
                      d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
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