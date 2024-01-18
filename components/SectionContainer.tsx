import React, { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
    return (
        <div className='bg-white lg:max-w-7xl m-auto py-16 my-6 px-20'>{children}</div>
    )
}
