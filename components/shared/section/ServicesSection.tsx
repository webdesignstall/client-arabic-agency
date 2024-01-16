import React from 'react'
import TabList from '../TabList'
import SectionContainer from '@/components/SectionContainer';

export default function ServicesSection() {
  return (
    <SectionContainer>
      <div>
        <div>
          <div className='w-full'>
            <h1 className='text-center text-6xl font-bold py-6'>
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
    content: <p>When it comes to marketing, AI can recognize factors that humans cannot see. Capitalize on quicker and smarter decision-making, higher ROI in promotion, accurately calculated and assessed KPIs, and the fully unleashed potential of client data.</p>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <p>Content for Tab 2</p>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <p>Content for Tab 3</p>,
  },
];