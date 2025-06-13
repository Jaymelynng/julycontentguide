import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { LoginForm } from './components/LoginForm';
import { EditModeProvider } from './contexts/EditModeContext';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState('intro');

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <ProgressProvider>
      <EditModeProvider>
        <div className="min-h-screen bg-gray-50 flex">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <MainContent activeSection={activeSection} />
        </div>
      </EditModeProvider>
    </ProgressProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;