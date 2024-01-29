import { useSelector } from "react-redux";

export const translate = (data: any, key: string): string => {

    const locale = useSelector((state: any) => state?.translate?.locale)

    if (locale === 'ar') {

        return data[key]
    } else if (locale === 'en') {
        return data?.localizations?.data[0]?.attributes[key];
    }
    return ''
}