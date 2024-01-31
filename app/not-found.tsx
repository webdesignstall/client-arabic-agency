import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-white text-lg font-semibold'>Not Found</h2>
            <p className='text-white text-lg font-semibold'>Could not find requested resource</p>
            <Link className='text-white text-md hover:underline hover:text-gray-300 duration-150' href="/">Return Home</Link>
        </div>
    )
}