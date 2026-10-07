import { useState } from 'react';
import Header from 'tr-tools/AdminDashboard/components/Header';
import Overview from 'tr-tools/AdminDashboard/components/Overview/Overview';
import AllBlocks from 'tr-tools/AdminDashboard/components/AllBlocks/AllBlocks';
// import FreeVsProCard from 'tr-tools/AdminDashboard/components/FreeVSPro/FreeVsProCard';
import Changelog from 'tr-tools/AdminDashboard/components/Changelog/Changelog';
import System from 'tr-tools/AdminDashboard/components/System/System';
const App = props => {
  const [activeTab, setActiveTab] = useState('overview');


  return (
    <>
      <Header {...props} activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* activeTab অনুযায়ী Component Render করুন */}
      {activeTab === 'overview' && <Overview {...props} activeTab={activeTab} setActiveTab={setActiveTab} />}
      {activeTab === 'all-blocks' && <AllBlocks {...props} activeTab={activeTab} setActiveTab={setActiveTab} />}
      {/* {activeTab === 'free-vs-pro' && <FreeVsProCard {...props} />} */}
      {activeTab === 'changelog' && <Changelog {...props} />}
      {activeTab === 'system' && <System {...props} />}
    </>
  );
}; 

export default App;
