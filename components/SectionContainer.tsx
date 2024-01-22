import React, { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
    return (
        <div className='bg-white lg:max-w-[84rem] w-full px-6 py-12 my-4 m-auto lg:py-20 lg:my-6 lg:px-28'>{children}</div>
    )
}
