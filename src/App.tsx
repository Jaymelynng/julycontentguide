import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { EditModeProvider } from './contexts/EditModeContext';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <EditModeProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
    </EditModeProvider>
  );
}

export default App;