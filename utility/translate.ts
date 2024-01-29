import {useLocalization} from "@/context/LocalizeProvider";

export const translate = (data: any, key: string):string =>{


    const { locale, switchLocale } = useLocalization();


    if (locale === 'ar'){
        return data[key]
    }else if (locale === 'en'){
        // @ts-ignore
        return data?.localizations?.data[0]?.attributes[key];
    }
    return ''
}