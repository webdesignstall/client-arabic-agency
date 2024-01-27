import DeteilsSectionContainer from "@/components/DeteilsSectionContainer";

export default function WhatHappens () {
    return (
        <DeteilsSectionContainer>
            <div className="md:grid grid-cols-12 gap-5">
                <div className="col-span-5">
                    <h2 className="my-5 md:my-10 text-3xl text-black font-medium">Let's talk about your <br /> IT needs</h2>
                    <h2 className="text-xl text-black font-medium mb-5">What happens next?</h2>
                    <div className="flex items-center gap-3">
                        <h1 className="px-4 py-2 rounded-[50%] bg-[#EBEBEB] ">1</h1>
                        <h1>An expert contacts you after having analyzed your requirements;</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="px-4 py-2 rounded-[50%] bg-[#EBEBEB] ">2</h1>
                        <h1>If needed, we sign an NDA to ensure the highest privacy level;</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className="px-4 py-2 rounded-[50%] bg-[#EBEBEB] ">3</h1>
                        <h1>We submit a comprehensive project proposal with estimates, timelines, CVs, etc.</h1>
                    </div>
                    <h1 className="text-2xl mt-10 ">Customers who trust us</h1>
                    <div className="flex gap-4 items-center">
                        <img className="w-[100px] h-[40px]" src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-gray.svg" alt="" />
                        <img className="w-[100px] h-[40px]" src="https://static.andersenlab.com/andersenlab/new-andersensite/customers/tui.svg" alt="" />
                        <img className="w-[100px] h-[40px]" src="https://static.andersenlab.com/andersenlab/new-andersensite/customers/verivox-gmbh.svg" alt="" />
                    </div>
                </div>
                <div className="col-span-7"></div>
            </div>
        </DeteilsSectionContainer>
    );
}

