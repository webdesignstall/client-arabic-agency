'use client';
import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";
import BookAFree from "@/components/shared/seeMore/BookAFree";
import SeeMoreHeroSection from "@/components/shared/seeMore/SeeMoreHeroSection";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { translate } from "@/utility/translate";
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/Footer";

export default function page() {

    const { id } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        // @ts-ignore
        (async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-sevens/${id}?populate=*`);
            setDetail(data?.data?.attributes)
        })()

    }, [id])

    return (
        <>
            <PageHeader />
            <SeeMoreHeroSection data={detail} />
            <DeteilsSectionContainer>
                {/*<div>*/}
                {/*    <div className="text-center  md:flex justify-between items-center mb-8 md:mb-14">*/}
                {/*        <div className="md:flex gap-5">*/}
                {/*            <button className="mt-5 md:mb-0 py-1 px-8 text-xl md:text-3xl font-medium bg-[#ebebeb] rounded-3xl">Al</button>*/}
                {/*            <button className="mt-5 md:mb-0 py-1 px-8 text-xl md:text-3xl font-medium bg-[#ebebeb] rounded-3xl">Healthcare</button>*/}
                {/*        </div>*/}
                {/*        <div className="mt-5 md:mt-0 md:flex gap-14 items-center flex-wrap">*/}
                {/*            <h1 className="mb-2 md:mb-0 text-xl md:text-3xl">Jun 16, 2023</h1>*/}
                {/*            <h1 className="mb-2 md:mb-0 text-xl md:text-3xl">6 minutes to read</h1>*/}
                {/*            <h1 className="flex gap-2 items-center justify-center text-xl md:text-3xl">*/}
                {/*            <svg className="BlueprintText-module--icon--37a3e Icon-module--icon--c95f8 w-7" viewBox="0 0 20 21" fill="none"><path d="M18.6778 10.2389C16.8056 6.77776 13.5222 4.68332 9.8889 4.68332C6.25557 4.68332 2.96668 6.77776 1.11112 10.2389L0.955566 10.5L1.10001 10.7667C2.97223 14.2278 6.25557 16.3222 9.8889 16.3222C13.5222 16.3222 16.8111 14.2555 18.6778 10.7667L18.8222 10.5L18.6778 10.2389ZM9.8889 15.1833C6.76112 15.1833 3.8889 13.4389 2.22223 10.5C3.8889 7.5611 6.76112 5.81665 9.8889 5.81665C13.0167 5.81665 15.8556 7.56665 17.55 10.5C15.8556 13.4389 13.0111 15.1833 9.8889 15.1833Z" fill="#828282"></path><path d="M10.0499 6.70555C9.29663 6.71104 8.56189 6.93965 7.93847 7.36248C7.31505 7.78531 6.83091 8.38341 6.54721 9.08124C6.26352 9.77906 6.19298 10.5453 6.34451 11.2832C6.49604 12.0211 6.86284 12.6975 7.39859 13.2271C7.93433 13.7566 8.61499 14.1155 9.3546 14.2584C10.0942 14.4014 10.8596 14.3219 11.554 14.0301C12.2485 13.7383 12.8409 13.2472 13.2565 12.6189C13.672 11.9906 13.8921 11.2533 13.8888 10.5C13.8866 9.99857 13.7855 9.5025 13.5913 9.04022C13.397 8.57794 13.1135 8.15854 12.7568 7.80605C12.4002 7.45356 11.9775 7.1749 11.513 6.98606C11.0485 6.79721 10.5513 6.70189 10.0499 6.70555ZM10.0499 13.2167C9.51782 13.2112 8.99922 13.0486 8.55924 12.7493C8.11926 12.4501 7.77751 12.0275 7.57692 11.5346C7.37633 11.0418 7.32584 10.5006 7.4318 9.97918C7.53775 9.45773 7.79542 8.97921 8.17244 8.60372C8.54947 8.22823 9.02904 7.97252 9.55092 7.86869C10.0728 7.76487 10.6137 7.81757 11.1058 8.02017C11.5978 8.22277 12.019 8.56624 12.3164 9.00744C12.6139 9.44864 12.7744 9.96789 12.7777 10.5C12.7792 10.8581 12.7095 11.2129 12.5728 11.5439C12.4361 11.8749 12.2351 12.1755 11.9814 12.4282C11.7276 12.6809 11.4262 12.8807 11.0947 13.0161C10.7631 13.1514 10.408 13.2196 10.0499 13.2167Z" fill="#828282"></path></svg>*/}
                {/*                526 views*/}
                {/*            </h1>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <p className="px-5 md:px-0 text-lg md:text-xl">The decisions doctors make are a question of life and death. They relate to everyone. To make correct decisions, medical care professionals need to process and analyze enormous volumes of data, with every detail taken into consideration. Unfortunately, human factors and human errors are always at play. People, even the most experienced and highly qualified ones, make mistakes. In this aspect, predictive modeling comes to the rescue. Indeed, predictive analytics in healthcare is already helping medical professionals mitigate risks. Available statistics corroborate this statement. As the experts employed by Acumen Research and Consulting stress, back in 2021, the global predictive analytics market in healthcare amounted to $9.5 million. Around 2030, it is projected to hit $87.5 billion. As for the current rates of use of predictive analytics in healthcare, per Statista, they are also impressive:</p>*/}
                {/*</div>*/}
                <div dangerouslySetInnerHTML={{
                    // @ts-ignore
                    __html: translate(detail, 'content')
                }}></div>
            </DeteilsSectionContainer>

            <DeteilsSectionContainer>
                <BookAFree />
            </DeteilsSectionContainer>
        </>
    );
}
