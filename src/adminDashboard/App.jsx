import { useState} from 'react';
import Header from 'tr-tools/AdminDashboard/components/Header';
import Overview from 'tr-tools/AdminDashboard/components/Overview/Overview';
import AllBlocks from 'tr-tools/AdminDashboard/components/AllBlocks/AllBlocks';

const App = props => {
  const [activeTab, setActiveTab] = useState('overview');


  return (
    <>
      <Header {...props} activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* activeTab অনুযায়ী Component Render করুন */}
      {activeTab === 'overview' && <Overview {...props} />}
      {activeTab === 'all-blocks' && <AllBlocks {...props} />}
    </>
  );
};

export default App;
