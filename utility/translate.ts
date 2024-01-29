import {useLocalization} from "@/context/LocalizeProvider";
import {useSelector} from "react-redux";


export const translate = (data: any, key: string):string =>{


    const { locale, switchLocale } = useLocalization();
    // const locale = useSelector((state: any) => state.translate.translate)

    // console.log('locale', locale)

    if (locale === 'ar'){
        // @ts-ignore
        // console.log('translate en',data[key])
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