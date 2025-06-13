import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { EditModeProvider } from './contexts/EditModeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { ContentProvider } from './contexts/ContentContext';
import { EditModeToggle } from './components/EditModeToggle';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <ContentProvider>
      <ProgressProvider>
        <EditModeProvider>
          <EditModeToggle />
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            <MainContent activeSection={activeSection} />
          </div>
        </EditModeProvider>
      </ProgressProvider>
    </ContentProvider>
  );
}

export default App;