import SectionContainer from "@/components/SectionContainer";

export default  function Challenges() {
    return (
        <SectionContainer>
            <h1 className='text-4xl font-medium'>Challenges</h1>
            <h2 className="my-10 text-xl">This IT initiative posed a range of challenges that our team has successfully resolved, including:</h2>
            <ul className='grid grid-cols-2 '>
                <li className='flex gap-3 pb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Ambitious global scale from the very beginning;</span>
                </li>
                <li className='flex gap-3 pb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Full compliance with HIPAA, GDPR, and PIPEDA standards;</span>
                </li>
                <li className='flex gap-3 pb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Exceptional usability, both for medical providers and patients;</span>
                </li>
                <li className='flex gap-3 pb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lYWyrh5v1ik0aDNEHA6RYW4PLHYtzgH3xg&usqp=CAU" alt="" className='w-[23px] h-[20px]'/>
                    <span>Seamless integration with payment systems and communication channels.</span>
                </li>
            </ul>
        </SectionContainer>
    );
}
