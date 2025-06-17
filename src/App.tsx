import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { ProgressProvider } from './contexts/ProgressContext';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <ContentProvider>
      <ProgressProvider>
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            <MainContent activeSection={activeSection} />
          </div>
      </ProgressProvider>
    </ContentProvider>
  );
}

export default App;