import React from 'react'
import TabList from '../TabList'
import SectionContainer from '@/components/SectionContainer';
import { translate } from "@/utility/translate";
import { useSelector } from 'react-redux';
import { useLocalization } from '@/context/LocalizeProvider';


// @ts-ignore
export default function ServicesSection({ homeData }) {
  const { locale, switchLocale } = useLocalization();
  return (
    <SectionContainer>
      <div id='services'>
        <div>
          <div className='w-full'>
            <h1 className={`lg:text-6xl text-3xl font-bold py-6 ${locale === 'en' ? '' : 'rtl'}`}>
              {translate(homeData, 'homeSectionOneTitle')}
            </h1>
          </div>
          <div>
            <TabList tabs={tabs} />
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}



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
];