"use client";
import SectionContainer from "@/components/SectionContainer";
import React, {useEffect, useState} from "react";

import { translate } from "@/utility/translate";
import BookFree from "../seeMore/BookFree";
import axios from "axios";
import {useLocalization} from "@/context/LocalizeProvider";

// @ts-ignore
export default function OrderSection() {

  const {locale} = useLocalization();

  const [formInfo, setFormInfo] = useState({});

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/contact-us-form-texts?populate=*`);
      setFormInfo(data?.data[0]?.attributes)
    })()

  }, [])


  return (
    <SectionContainer>
      <div id="section9" className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <div className="">
            <div className="text-center">
              <h2 className="md:text-4xl font-heading font-bold mb-4 text-xl text-left">
                {
                  // @ts-ignore
                  translate(formInfo, 'title')}
              </h2>
              <p className="text-gray-900 mb-3 md:text-2xl text-lg text-left">
                {
                  // @ts-ignore
                  translate(formInfo, 'subTitle')}
              </p>
              <div className="flex justify-center pt-7">
                <div className=" w-full">
                  {/*<div className="">
                    <ul className="space-y-8">
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500">
                            An expert contacts you after having analyzed your
                            requirements;
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500 ">
                            If needed, we sign an NDA to ensure the highest
                            privacy level;
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500">
                            We submit a comprehensive project proposal with
                            estimates, timelines, CVs, etc.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>*/}

                  <div dangerouslySetInnerHTML={{
                    // @ts-ignore
                    __html: translate(formInfo, 'body')}}></div>

                </div>
              </div>
              {
                // @ts-ignore
                formInfo?.CustomerWhoTrustUs?.data?.length && (
                      <div>
                        <h3 className="text-gray-600 mb-3 text-left md:text-2xl text-lg mt-8">
                          {
                            locale !== 'en' ? 'العميل الذي يثق بنا' : 'Customer who trust us'
                          }

                        </h3>
                        <div className=" flex justify-space-between w-full">
                          {
                            // @ts-ignore
                            formInfo?.CustomerWhoTrustUs?.data?.map(image => (
                                <img
                                    src={
                                      // @ts-ignore
                                        process.env.NEXT_PUBLIC_BACKED_BASE + image?.attributes?.url
                                    }
                                    alt="Customers who trust us"
                                    style={{width: '40px '}}
                                    className="w-4/12 mr-2"
                                />
                            ))
                          }


                        </div>
                      </div>
                  )
              }

            </div>
          </div>
        </div>

        <div className="w-full md:w-8/12  lg:pl-24 lg:pr-24 mt-3">
          <div className="w-full ">
            <BookFree/>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
