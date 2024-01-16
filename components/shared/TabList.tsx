// components/Tabs.tsx
"use client"
import React, { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
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
    <div className="grid grid-cols-3">
      <div className="flex-none">
        <ul className="">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer w-full block text-2xl py-4 px-8 hover:bg-gray-100 duration-300 ${
                activeTab === tab.id ? 'bg-gray-200 font-medium' : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow col-span-2 px-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? '' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
