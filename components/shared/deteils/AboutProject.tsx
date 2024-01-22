import AboutProjectImags from './AboutProjectImages';
import DeteilsSectionContainer from '@/components/DeteilsSectionContainer';

export default function AboutProject() {
    return (
        <DeteilsSectionContainer>
            <h1 className='text-4xl font-medium text-center md:text-start'>About the project</h1>
            <h1 className='text-2xl font-medium mt-7'>The Universkin platform functions on a web basis. As such, it:</h1>
            <ul className='md:grid grid-cols-2 mt-10'>
                <li className='flex gap-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Connects clients and doctors via respective accounts;</span>
                </li>
                <li className='flex gap-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Features special services for doctors, e.g. serum preparation recommendations and the capability to track the patient's skin care journey;</span>
                </li>
                <li className='flex gap-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Supports an online store of ready-made Universkin products</span>
                </li>
            </ul>
            <p className='mt-10 md:grid grid-cols-3 col-span-2'> <span className='col-span-2'>The resulting user flow is as follows. A patient uploads their photo and answers several questions. After that, proprietary AI-driven algorithms analyze their skin type and other characteristics and connect the client with a doctor. The doctor produces a skin care product (i.e. serum), tailored to the client's needs, from Universkin's ingredients. Then, the client receives the product, which specifically matches their skin type, by post.</span></p>
            <p className='mt-10 md:grid grid-cols-3'><span className='col-span-2'>While working on this platform, our team of Pharma industry software experts, in close collaboration with the customer, gathered and analyzed tech requirements, developed the front-end and back-end parts, integrated the customer's AI into the back-end, tuned all notifications, and implemented communication channels.</span></p>
            <h1 className="text-xl text-[#B2B2B2] my-10">LOCATION: <span className="pl-10 text-black ">24 months</span></h1>
            <div className='md:flex gap-5'>
                <h1 className="text-xl text-[#B2B2B2] mb-3">TECHNOLOGIES</h1>
                <div className='flex gap-2 flex-wrap'>
                {
                    ["Vue.js","Java","Python","MsSQL","AWS","JavaScript"].map((technolog, index) => <div key={index} className='px-4 rounded-2xl bg-[#e2e2e2] text-black text-lg'>
                        {technolog}
                    </div>)
                }
                </div>
            </div>
            <AboutProjectImags aboutImages={aboutImages}/>
        </DeteilsSectionContainer>
    );
}
const aboutImages = [
    {
        id: '1',
        title: "The home page of Universkin's site",
        photo: 'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/1.1.1.desktop.jpg',
    },
    {
        id: '2',
        title: "Patient card page",
        photo: 'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/1.1.4.desktop.jpg',
    },
    {
        id: '3',
        title: "Treatment recommendation page",
        photo: 'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/1.1.3.desktop.jpg',
    },
    {
        id: '4',
        title: "Custom treatment creation window",
        photo: 'https://static.andersenlab.com/andersenlab/new-andersensite/cases/universkin/1.1.4.desktop.jpg',
    },
]