"use client"

import { useLocalization } from "@/context/LocalizeProvider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";


export function Providers({ children }: { children: React.ReactNode }) {

    const {locale } = useLocalization();

    return <Provider store={store}><div className={`${locale !== 'en'? 'rtl' : ''}`}>{children}</div></Provider>
}