import React, { useState } from 'react';
import AITemplatesPage from './AITemplatesPage';
import MyScribesPage from './MyScribesPage';
import AccountPage from './AccountPage';
import RecordingPage from './RecordingPage';
import HistoryPage from './HistoryPage';

const Dashboard: React.FC = () => {
  const [activePage, setActivePage] = useState('recording');

  const renderPage = () => {
    switch (activePage) {
      case 'aiTemplates':
        return <AITemplatesPage />;
      case 'myScribes':
        return <MyScribesPage />;
      case 'account':
        return <AccountPage />;
      case 'history':
        return <HistoryPage />;
      case 'recording':
      default:
        return <RecordingPage />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-100 w-64 p-4">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul>
          <li onClick={() => setActivePage('recording')}>Record</li>
          <li onClick={() => setActivePage('myScribes')}>My Scribes</li>
          <li onClick={() => setActivePage('aiTemplates')}>AI Templates</li>
          <li onClick={() => setActivePage('history')}>History</li>
          <li onClick={() => setActivePage('account')}>Account</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">{renderPage()}</main>
    </div>
  );
};

export default Dashboard;
