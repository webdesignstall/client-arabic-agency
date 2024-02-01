import React, { useEffect, useState } from 'react'
import TabList from '../TabList'
import SectionContainer from '@/components/SectionContainer';
import { translate } from "@/utility/translate";
import { useSelector } from 'react-redux';
import { useLocalization } from '@/context/LocalizeProvider';
import axios from "axios";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';


// @ts-ignore
export default function ServicesSection({ homeData }) {
  const { locale, switchLocale } = useLocalization();

  console.log('services locale', locale);
  

  // @ts-ignore
  const [activeTab, setActiveTab] = useState(0);

  const [homeSectionTwo, setHomeSectionTwo] = useState([]);

  const { } = useLocalization();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/home-section-2s?populate=*`);
      setHomeSectionTwo(data?.data)
      setActiveTab(data?.data[0]?.id)
    })()

  }, [])

  // @ts-ignore
  const tabs = homeSectionTwo?.reduce((previousValue, currentValue, currentIndex, array) => {

    return [...previousValue, {
      // @ts-ignore
      id: currentValue?.id,
      // @ts-ignore
      label: translate(currentValue?.attributes, 'Title'),
      // @ts-ignore
      content: translate(currentValue?.attributes, 'Content')
    }]
  }, [])





  const handleTabClick = (tabId: string) => {
    // @ts-ignore
    setActiveTab(tabId);
  };




  // @ts-ignore
  if (tabs?.length > 0) {
    return (
      <SectionContainer>
        <div id='services'>
          <div>
            <div className='w-full'>
              <h1 className={`lg:text-6xl text-3xl font-bold py-6`}>
                {translate(homeData, 'homeSectionTwoTitle')}
              </h1>
            </div>
            <div>
              {/*<TabList tabs={tabs} />*/}
              <div className={`lg:flex  pt-8 w-full hidden flex-row `}>
                <div className="w-2/3">
                  <ul>
                    {
                      // @ts-ignore
                      tabs?.map((tab) => (
                        <li
                          key={tab?.id}
                          className={`cursor-pointer w-full block text-xl py-4 px-8 hover:bg-gray-100 duration-300 ${activeTab == tab?.id ? 'bg-gray-200 font-medium' : ''

                            } ${locale === 'en' ? '' : 'rtl text-right'
                            }`}
                          onClick={() => handleTabClick(tab?.id)}
                        >
                          {tab?.label}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className={`w-full ${locale === 'en' ? 'pl-16' : 'pr-16'}`}>
                  {
                    // @ts-ignore
                    tabs.map((tab) => (
                      <div
                        key={tab?.id}
                        className={`${activeTab == tab?.id ? '' : 'hidden'}`}
                      >
                        <div>
                          <p className='pb-6 text-lg' dangerouslySetInnerHTML={{ __html: tab?.content }}></p>
                          {/*<ul className='bg-gray-200 p-10 space-y-3'>
                          <li>{tab.header}</li>
                          {
                            Array.from(tab.list).map((item:any, i)=>(
                                <li className='flex gap-2 items-center px-3' key={i}>
                                  <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-3' fill='none' viewBox='0 0 9 8'>
                                    <path stroke='#556170' d='m.5 4 3 2.5L8 1'/>
                                  </svg>
                                  {item}
                                </li>
                            ))
                          }
                        </ul>*/}
                        </div>
                      </div>

                    ))}
                  {/* <WithOurTeam/> */}
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full lg:hidden">
                {
                  // @ts-ignore
                  tabs?.map((tab, index) => (
                    <AccordionItem key={index} className={cn('border-none flex-row-reverse')} value={tab.id}>
                      <AccordionTrigger className='text-xl px-4 border-none'>
                        {tab.label}
                      </AccordionTrigger>
                      <AccordionContent className='py-6'>
                        <div>
                          <p className='pb-6 text-lg' dangerouslySetInnerHTML={{ __html: tab?.content }}></p>
                          {/* <ul className='bg-gray-200 p-10 space-y-3'>
                            <li>{tab.header}</li>
                            {
                              Array.from(tab.list).map((item: any, i) => (
                                <li className='flex gap-2 items-center px-3' key={i}>
                                  <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-3' fill='none' viewBox='0 0 9 8'>
                                    <path stroke='#556170' d='m.5 4 3 2.5L8 1' />
                                  </svg>
                                  {item}
                                </li>
                              ))
                            }
                          </ul> */}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </div>
        </div>
      </SectionContainer>
    )
  }

  return ""


}



/*
const tabs = [
  {
    id: 'tab1',
    label: 'Strategy and Consultion',
    content: 'Andersen will be your trusted partner in crafting and executing a strategic roadmap for success in the digital landscape of tomorrow. Capitalize on the unlimited horizons revealed by investments in smart self-learning algorithms',
    header: 'Reach out to us for:',
    list: [
      'Business optimization with AI technologies;',
      'Business optimization with AI technologies;',
      'Thorough digital transformation based on AI;',
      'Thorough digital transformation based on AI;',
      'Process and workforce automation consulting;',
      'Process and workforce automation consulting;'
    ]
  },
  {
    id: 'tab2',
    label: 'Customer Service Center',
    content: 'Andersen is well-positioned to empower you to harness AI in service centers. Enhance client engagement, reduce service costs, obtain more valuable client data with added emotional nuances, and aggregate your offers on the fly through implicit fact processing.',
    header: 'Andersen provides qualified assistance with:',
    list: [

      'Business optimization with AI technologies;',
      'Business optimization with AI technologies;',
      'Thorough digital transformation based on AI;',
      'Thorough digital transformation based on AI;',
      'Process and workforce automation consulting;',
      'Process and workforce automation consulting;'

    ]
  },
  {
    id: 'tab3',
    label: 'Effective Campaigns',
    content: 'When it comes to marketing, AI can recognize factors that humans cannot see. Capitalize on quicker and smarter decision-making, higher ROI in promotion, accurately calculated and assessed KPIs, and the fully unleashed potential of client data.',
    header: 'Andersens team works on:',
    list: [

      'Business optimization with AI technologies;',
      'Business optimization with AI technologies;',
      'Thorough digital transformation based on AI;',
      'Thorough digital transformation based on AI;',
      'Process and workforce automation consulting;',
      'Process and workforce automation consulting;'

    ]
  },
  {
    id: 'tab4',
    label: 'Fraud and Risk Management',
    content: 'Approaching our team is a straightforward path to more effective fraud detection and risk management. Relieve your staff members from never-ending manual workload, speed up all applicable processes, and get things done with greater accuracy.',
    header: 'Andersen provides safeguards against:',
    list: [

      'Business optimization with AI technologies;',
      'Business optimization with AI technologies;',
      'Thorough digital transformation based on AI;',
      'Thorough digital transformation based on AI;',
      'Process and workforce automation consulting;',
      'Process and workforce automation consulting;'

    ]
  },
  {
    id: 'tab5',
    label: 'Predictive Analytics',
    content: 'Predictive Analytics enables us to foresee how clients will likely act and gain valuable insights. It can minimize unplanned downtime and reduce costs via proactive maintenance strategies. Additionally, it automates quality control to streamline the quality assurance process, reducing human errors and more.',
    header: 'With our team, you can get:',
    list: [

      'Business optimization with AI technologies;',
      'Business optimization with AI technologies;',
      'Thorough digital transformation based on AI;',
      'Thorough digital transformation based on AI;',
      'Process and workforce automation consulting;',
      'Process and workforce automation consulting;'

    ]
  },
];*/
