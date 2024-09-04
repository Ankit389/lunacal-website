import React, { useState } from 'react';
import AboutMe from './AboutMe';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="bg-slate-900 rounded-lg p-4 shadow-lg   ">
      <div className="flex space-x-4   text-white bg-slate-900">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` ${activeTab === tab ? 'border-b-2 border-white text-white' : 'text-grayText'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 text-lightGray">
        {activeTab === 'About Me' && <AboutMe />}
        {activeTab === 'Experiences' && <div>Experiences Content</div>}
        {activeTab === 'Recommended' && <div>Recommended Content</div>}

      </div>
    </div>
  );
};

export default Tabs;
