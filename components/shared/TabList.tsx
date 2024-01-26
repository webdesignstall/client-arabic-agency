// components/Tabs.tsx
"use client"
import React, { useState } from 'react';
import WithOurTeam from './deteils/WithOurTeam';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  header: string,
  list: any,
};

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="grid grid-cols-5 pt-8">
      <div className="col-span-2 flex-none">
        <ul className="">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer w-full block text-xl py-4 px-8 hover:bg-gray-100 duration-300 ${
                activeTab === tab.id ? 'bg-gray-200 font-medium' : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow col-span-3 pl-16">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? '' : 'hidden'}`}
          >
            <div>
              <p className='pb-6 text-lg'>{tab.content}</p>
              <ul className='bg-gray-200 p-10 space-y-3'>
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
              </ul>
            </div>
          </div>
          
        ))}
        {/* <WithOurTeam/> */}
      </div>
    </div>
  );
};

export default Tabs;
