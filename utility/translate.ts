import {useLocalization} from "@/context/LocalizeProvider";


export const translate = (data: any, key: string):string =>{


    const { locale, switchLocale } = useLocalization();

    console.log('locale', key)

    if (locale === 'ar'){
        // @ts-ignore
        console.log('translate en',data[key])
        // @ts-ignore
        return data[key]
    }else if (locale === 'en'){
        // @ts-ignore
        console.log('translate ar',data?.localizations?.data[0]?.attributes[key])
        // @ts-ignore
        return data?.localizations?.data[0]?.attributes[key];
    }
    return ''
}