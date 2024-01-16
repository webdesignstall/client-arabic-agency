import React, { ReactNode } from 'react'

export default function SectionContainer({ children }: { children: ReactNode }) {
    return (
        <div className='bg-white max-w-[1330px] m-auto px-24 py-12 my-6'>{children}</div>
    )
}
