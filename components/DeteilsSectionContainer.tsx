import React, { ReactNode } from 'react'
import {useLocalization} from "@/context/LocalizeProvider";

export default function DeteilsSectionContainer({ children }: { children: ReactNode }) {
    const { locale, switchLocale } = useLocalization();

    return (
        <div className={`bg-white w-11/12 lg:max-w-7xl m-auto py-5 lg:py-16 lg:px-20 p-5 ${locale !== 'en' ? 'rtl' : ''}`}>{children}</div>
    )
}
