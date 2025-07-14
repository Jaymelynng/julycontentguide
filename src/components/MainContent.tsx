import React from 'react';
import { PDFGeneratorButton } from './PDFGeneratorButton';
import { IntroSection } from './sections/IntroSection';
import { MonthSelectorSection } from './sections/MonthSelectorSection';
import { AugustIntroSection } from './sections/AugustIntroSection';
import { AugustContentSection } from './sections/AugustContentSection';
import { JulyArchiveSection } from './sections/JulyArchiveSection';
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
      case 'month-selector':
        return <MonthSelectorSection />;
      case 'august-intro':
        return <AugustIntroSection />;
      case 'august-1':
      case 'august-2':
      case 'august-3':
      case 'august-4':
      case 'august-5':
      case 'august-6':
      case 'august-7':
      case 'august-8':
      case 'august-9':
        return <AugustContentSection ideaNumber={activeSection.split('-')[1]} />;
      case 'july-archive':
        return <JulyArchiveSection />;
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
      case 'month-selector': return 'Month-Selector';
      case 'august-intro': return 'August-Content-Overview';
      case 'august-1': return 'August-Idea-1-Guide';
      case 'august-2': return 'August-Idea-2-Guide';
      case 'august-3': return 'August-Idea-3-Guide';
      case 'august-4': return 'August-Idea-4-Guide';
      case 'august-5': return 'August-Idea-5-Guide';
      case 'august-6': return 'August-Idea-6-Guide';
      case 'august-7': return 'August-Idea-7-Guide';
      case 'august-8': return 'August-Idea-8-Guide';
      case 'august-9': return 'August-Idea-9-Guide';
      case 'july-archive': return 'July-Archive';
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