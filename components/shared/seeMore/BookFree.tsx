import {useEffect, useRef, useState} from "react";
import axios from "axios";
import * as Toast from '@radix-ui/react-toast';
import {translate} from "@/utility/translate";
import {useLocalization} from "@/context/LocalizeProvider";

export default function BookFree() {

        const [formData, setFormData] = useState({
            industry: '',
            name: '',
            email: '',
            phone: '',
            projectDescription: ''
        });

    const [formErrors, setFormErrors] = useState({
        industry: '',
        name: '',
        email: '',
        phone: '',
        projectDescription: '',
    });

    const [open, setOpen] = useState(false);

        // @ts-ignore
    const handleChange = (e) => {
            const { name, value, type, checked, file } = e.target;

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: '',
        }));

            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : type === 'file' ? file : value,
            }));
        };

        // @ts-ignore
    const handleSubmit = async (e) => {
            e.preventDefault();

        if (formData?.industry == ''){
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                ['industry']: locale != 'en' ? 'الصناعة مطلوبة' : 'Industry is required',
            }));
            return
        }
        if (formData?.email == ''){
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                ['email']: locale != 'en' ? 'البريد الالكتروني مطلوب' : 'Email is required',
            }));
            return
        }
        if (formData?.phone == ''){
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                ['phone']: locale != 'en' ? 'الهاتف مطلوب' : 'Phone is required',
            }));
            return
        }
        if (formData?.projectDescription == ''){
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                ['projectDescription']: locale != 'en' ? 'وصف المشروع مطلوب' : 'Project Description is required',
            }));
            return
        }


        await axios.post( `${process.env.NEXT_PUBLIC_API_BASE}/ezforms/submit`, {formData: formData})
            .then((res) => {
                console.log(res.status)

                if (res.status == 200){
                    console.log('saved')
                    // @ts-ignore
                    // savedRef.current.publish()
                    setOpen(true)
                    setFormData((prevFormData) => ({
                        // ...prevFormData,
                        industry: '',
                        name: '',
                        email: '',
                        phone: '',
                        projectDescription: '',
                        file: '',
                        nda: false,
                    }));
                }
            })
            .catch((error) => {
                // error.response.status Check status code
            }).finally(() => {
            //Perform action in always
        });

        };

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // @ts-ignore
        (async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/contact-us-form-categories?populate=*`);
            setCategories(data?.data)

        })()

    }, [])

    const {locale} = useLocalization();


    return (
        <>
            <div className={open ? 'block' : 'hidden'}>
                <h4 className='text-green-600'>
                    {
                        locale !== 'en' ? 'شكر لتواصلك معنا' : 'Thank You for Reaching Out to Us'
                    }

                </h4>
            </div>

            <form
                id="get-consultation"
                name="get-consultation"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="mt-2 md:mt-3">
                    <div className="relative">
                        <select
                            className="w-full py-2 border-b rounded-md focus:outline-none  bg-transparent"
                            name="industry"
                            onChange={handleChange}
                            value={formData.industry}
                        >
                            <option value="" disabled>
                                {
                                    locale !== 'en' ? 'اختر فئتك*' : 'Choose your category*'
                                }
                            </option>

                            {
                                categories?.map(category => (
                                    <option value={
                                        // @ts-ignore
                                        category?.attributes?.name}>{
                                        // @ts-ignore
                                        translate(category?.attributes, 'name')}</option>
                                ))
                            }


                            <option value="other">
                                {
                                    locale !== 'en' ? 'آخر' : 'Other'
                                }
                                </option>
                        </select>
                        {formErrors.industry && (
                            <p className="text-red-500">{formErrors.industry}</p>
                        )}
                    </div>
                </div>
                <div className="md:flex items-center gap-5 mt-5">
                    <div className="mb-2 md:w-[50%] md:mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {
                                locale !== 'en' ? 'اسم' : 'Name'
                            }

                        </label>
                        <input
                            name='name'
                            onChange={handleChange}
                            value={formData.name}
                            type="text"
                            className="py-2 w-full border-b outline-none rounded-md"
                        />
                    </div>
                    <div className="mb-2 md:w-[50%] md:mb-4 mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {
                                locale !== 'en' ? 'البريد الإلكتروني للشركة*' : 'Corporate E-mail*'
                            }

                        </label>
                        <input
                            required
                            name='email'
                            type="email"
                            className="py-2 w-full border-b outline-none rounded-md"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        {formErrors.email && (
                            <p className="text-red-500">{formErrors.email}</p>
                        )}
                    </div>
                </div>
                <div className="sm:col-span-2 md:col-span-1 mt-4 mb-4">
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {
                                locale !== 'en' ? 'هاتف*' : ' Phone*'
                            }

                        </label>
                        <input
                            required
                            name='phone'
                            type="tel"
                            className="py-2 w-full border-b outline-none rounded-md"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        <p className="mt-1 text-gray-600 text-sm">
                            {
                                locale !== 'en' ? 'سوف نتصل بك في أسرع وقت ممكن أو يمكنك ذلك' : 'We will call you ASAP or you can'
                            }

                            <span className="font-bold">
                                {
                                    locale !== 'en' ? 'جدولة مكالمة' : 'Schedule a call'
                                }
                               </span>
                        </p>
                        {formErrors.phone && (
                            <p className="text-red-500">{formErrors.phone}</p>
                        )}
                    </div>
                </div>
                <div className="sm:col-span-2 md:col-span-1 mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            {
                                locale !== 'en' ? 'يرجى وصف متطلبات المشروع الخاص بك *' : 'Please describe your project requirements*'
                            }

                        </label>
                        <textarea
                            required={true}
                            name='projectDescription'
                            className="mt-1 p-2 w-full border outline-none rounded-md"
                            maxLength={1000}
                            onChange={handleChange}
                            value={formData.projectDescription}
                        ></textarea>
                        {formErrors.projectDescription && (
                            <p className="text-red-500">{formErrors.projectDescription}</p>
                        )}
                    </div>
                </div>

                {/*<div className="mb-2 md:mb-4">
                  <div className='md:flex'>
                  <input
                    type="file"
                    name="file"
                    accept=".doc,.docx,.pdf,.ppt,.pptx,jpg"
                    onChange={handleChange}
                    value={formData.file}
                  />
                  <p className="mt-1 text-gray-600 text-sm">
                    No more than 3 files may be attached up to 3MB each.
                    Formats: doc, docx, pdf, ppt, pptx.
                  </p>
                  </div>
                </div>*/}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full md:w-fit px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-700"
                    >
                        {
                            locale !== 'en' ? 'ارسل طلب' : 'Send request'
                        }

                    </button>
                    {/*<label className="flex items-center mt-2 md:mt-0">
                  <input type="checkbox" name="nda" className="form-checkbox" />
                  <span className="ml-2 text-gray-700">
                    I want to protect my data by signing an NDA.
                  </span>
                </label>*/}

                </div>
            </form>
        </>



    );
}