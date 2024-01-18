import React from 'react'
import TabList from '../TabList'
import SectionContainer from '@/components/SectionContainer';

export default function ServicesSection() {
  return (
    <SectionContainer>
      <div>
        <div>
          <div className='w-full'>
            <h1 className='text-6xl font-bold py-12'>
              Our AI Development Services
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
    label: 'Tab 1',
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
    label: 'Tab 2',
    content:'Content for Tab 2',
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
    id: 'tab3',
    label: 'Tab 3',
    content: 'Content for Tab 3',
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
];