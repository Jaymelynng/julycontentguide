import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { ProgressProvider } from './contexts/ProgressContext';
import { ContentProvider } from './contexts/ContentContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ReliabilityIndicator } from './components/ReliabilityIndicator';
import { AccessibilityEnhancements } from './components/AccessibilityEnhancements';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <ErrorBoundary>
      <ContentProvider>
        <ProgressProvider>
          <AccessibilityEnhancements />
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            <main id="main-content" tabIndex={-1}>
              <MainContent activeSection={activeSection} />
            </main>
            <ReliabilityIndicator />
          </div>
        </ProgressProvider>
      </ContentProvider>
    </ErrorBoundary>
  );
}

export default App;