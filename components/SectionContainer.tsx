import React, { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
    return (
        <div className='bg-white lg:max-w-[84rem] m-auto py-20 my-6 px-28'>{children}</div>
    )
}
