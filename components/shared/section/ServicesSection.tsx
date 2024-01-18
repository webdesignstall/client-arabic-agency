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
    content: <p className='leading-relaxed'>Andersen will be your trusted partner in crafting and executing a strategic roadmap for success in the digital landscape of tomorrow. Capitalize on the unlimited horizons revealed by investments in smart self-learning algorithms.</p>,
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