import React from 'react';
import { IntroSection } from './sections/IntroSection';
import { BoredomSection } from './sections/BoredomSection';
import { FireworksSection } from './sections/FireworksSection';
import { HandstandSection } from './sections/HandstandSection';
import { ConfidenceSection } from './sections/ConfidenceSection';
import { RaceSection } from './sections/RaceSection';
import { RiddleSection } from './sections/RiddleSection';
import { TrialSection } from './sections/TrialSection';
import { BalanceSection } from './sections/BalanceSection';
import { GuidelinesSection } from './sections/GuidelinesSection';
import { TechnicalSection } from './sections/TechnicalSection';
import { SubmissionSection } from './sections/SubmissionSection';

interface MainContentProps {
  activeSection: string;
}

export function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'boredom':
        return <BoredomSection />;
      case 'fireworks':
        return <FireworksSection />;
      case 'handstand':
        return <HandstandSection />;
      case 'confidence':
        return <ConfidenceSection />;
      case 'race':
        return <RaceSection />;
      case 'riddle':
        return <RiddleSection />;
      case 'trial':
        return <TrialSection />;
      case 'balance':
        return <BalanceSection />;
      case 'guidelines':
        return <GuidelinesSection />;
      case 'technical':
        return <TechnicalSection />;
      case 'submission':
        return <SubmissionSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <main className="main">
      <EditModeToggle />
      <div className="content-block">
        {renderContent()}
      </div>
    </main>
  );
}