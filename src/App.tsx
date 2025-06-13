import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { EditModeProvider } from './contexts/EditModeContext';
import { GymProvider } from './contexts/GymContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { GymSelection } from './components/GymSelection';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <GymProvider>
      <ProgressProvider>
        <EditModeProvider>
          <GymSelection>
            <div className="min-h-screen bg-gray-50 flex">
              <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
              <MainContent activeSection={activeSection} />
            </div>
          </GymSelection>
        </EditModeProvider>
      </ProgressProvider>
    </GymProvider>
  );
}

export default App;