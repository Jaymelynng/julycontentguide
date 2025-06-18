import React from 'react';
import { PDFGeneratorButton } from './PDFGeneratorButton';
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

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'intro': return 'July-Content-Mission-Guide';
      case 'boredom': return 'Beat-Summer-Boredom-Guide';
      case 'fireworks': return '4th-of-July-Fireworks-Guide';
      case 'handstand': return 'Handstand-Contest-Guide';
      case 'confidence': return 'Confidence-Photo-Guide';
      case 'race': return 'Coach-vs-Kid-Race-Guide';
      case 'riddle': return 'Riddle-Week-Forward-Roll-Guide';
      case 'trial': return 'Free-Trial-Class-Guide';
      case 'balance': return 'Balance-Reel-Guide';
      case 'guidelines': return 'Content-Guidelines';
      case 'technical': return 'Technical-Standards';
      case 'submission': return 'Submission-Process';
      default: return 'Content-Guide';
    }
  };
  return (
    <main className="main">
      {activeSection !== 'intro' && (
        <div className="content-pdf-generator">
          <PDFGeneratorButton
            targetElementId="content-block"
            filename={`${getSectionTitle()}.pdf`}
            buttonText="📄 Download This Section as PDF"
            className="content-section-pdf-btn"
          />
        </div>
      )}
      <div className="content-block">
        <div id="content-block">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}