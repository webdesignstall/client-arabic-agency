import React, { ReactNode } from 'react'

export default function DeteilsSectionContainer({ children }: { children: ReactNode }) {
    return (
        <div className='bg-white w-11/12 lg:max-w-7xl m-auto py-5 lg:py-16 lg:px-20'>{children}</div>
    )
}
