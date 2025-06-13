import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContentMonth {
  id: string;
  name: string;
  year: number;
  month: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  created_at: string;
  sections: ContentSection[];
}

interface ContentSection {
  id: string;
  order: number;
  title: string;
  type: 'video' | 'photo' | 'series';
  description: string;
  requirements: string[];
  items: ContentItem[];
}

interface ContentItem {
  id: string;
  label: string;
  type: 'video' | 'photo';
}

interface ContentContextType {
  currentMonth: ContentMonth | null;
  availableMonths: ContentMonth[];
  isLoading: boolean;
  switchToMonth: (monthId: string) => void;
  createNewMonth: (monthData: Partial<ContentMonth>) => Promise<void>;
  updateCurrentMonth: (updates: Partial<ContentMonth>) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Default July content structure
const defaultJulyContent: ContentMonth = {
  id: 'july-2025',
  name: 'july',
  year: 2025,
  month: 7,
  title: 'July Content Mission',
  subtitle: 'Your Guide to Capturing Summer Magic',
  isActive: true,
  created_at: new Date().toISOString(),
  sections: [
    {
      id: 'boredom',
      order: 1,
      title: '5 Epic Ways to Beat Summer Boredom',
      type: 'series',
      description: 'Create five 15-20 second video clips showcasing different summer activities that beat boredom.',
      requirements: ['High energy content', 'Multiple activities', 'Authentic excitement'],
      items: [
        { id: 'boredom1', label: 'Video 1: A group of kids bursts with excitement and high energy (15-20 sec)', type: 'video' },
        { id: 'boredom2', label: 'Video 2: Learning a New Skill - super stoked (15-20 sec)', type: 'video' },
        { id: 'boredom3', label: 'Video 3: Friends Having Fun (15-20 sec)', type: 'video' },
        { id: 'boredom4', label: 'Video 4: Dancing or Silly Moments (15-20 sec)', type: 'video' },
        { id: 'boredom5', label: 'Video 5: Exhausted & Happy Kids (15-20 sec)', type: 'video' }
      ]
    },
    {
      id: 'fireworks',
      order: 2,
      title: '4th of July Fireworks',
      type: 'photo',
      description: 'Capture kids throwing pit cubes in the air or celebrating in a large group.',
      requirements: ['Group celebration', 'High energy', 'Festive atmosphere'],
      items: [
        { id: 'fireworks1', label: 'Kids throwing pit cubes in the air OR celebrating in large group', type: 'photo' }
      ]
    },
    {
      id: 'handstand',
      order: 3,
      title: 'Handstand Contest!!!',
      type: 'video',
      description: 'Organize a handstand contest for groups of kids, coaches, or both.',
      requirements: ['Clean background', 'Good lighting', 'Steady surface'],
      items: [
        { id: 'handstand1', label: 'Handstand contest video (floor, beam, or vault table)', type: 'video' }
      ]
    },
    {
      id: 'confidence',
      order: 4,
      title: 'The Secret to Confidence That Lasts Beyond Summer',
      type: 'video',
      description: 'Create one amazing 15-20 second video that makes you smile—no limits!',
      requirements: ['Authentic emotion', 'High quality', 'Positive energy'],
      items: [
        { id: 'confidence1', label: 'One amazing 15-20 second video showing joy, pride, excitement, or happiness', type: 'video' }
      ]
    },
    {
      id: 'race',
      order: 5,
      title: '"Can You Keep Up?" – Coach vs. Kid Race',
      type: 'video',
      description: 'Film an exciting, high-energy race between coaches and kids.',
      requirements: ['Loud cheering', 'Steady surface', 'Capture reactions'],
      items: [
        { id: 'race1', label: 'Coach vs. Kids race with reactions at the end', type: 'video' }
      ]
    },
    {
      id: 'riddle',
      order: 6,
      title: 'Riddle Week',
      type: 'series',
      description: 'Capture a preschool-age gymnast in each phase of a forward roll in 4 photos.',
      requirements: ['Clear photos', 'No blur', 'Good lighting'],
      items: [
        { id: 'riddle1', label: 'Photo 1: Hands Up High', type: 'photo' },
        { id: 'riddle2', label: 'Photo 2: Hands Down Low', type: 'photo' },
        { id: 'riddle3', label: 'Photo 3: Look at Your Belly', type: 'photo' },
        { id: 'riddle4', label: 'Photo 4: Over You Go: TADAA', type: 'photo' }
      ]
    },
    {
      id: 'trial',
      order: 7,
      title: '"Not sure what to expect? That\'s okay—we\'ll show you."',
      type: 'photo',
      description: 'Action shot of an active class in motion: kid active, coach engaged, high fives.',
      requirements: ['Motion capture', 'Coach engagement', 'Authentic interaction'],
      items: [
        { id: 'trial1', label: '1 super amazing photo: active class in motion with coach engagement & high fives', type: 'photo' }
      ]
    },
    {
      id: 'balance',
      order: 8,
      title: 'Balance Reel',
      type: 'series',
      description: 'Create a 3-part video series showcasing balance beam skills.',
      requirements: ['Multiple angles', 'Zoom techniques', 'Full routine'],
      items: [
        { id: 'balance1', label: 'Video 1: Walking – Zoom on Feet', type: 'video' },
        { id: 'balance2', label: 'Video 2: Skill – Zoom to Movement', type: 'video' },
        { id: 'balance3', label: 'Video 3: Dismount – Zoom to Landing', type: 'video' }
      ]
    }
  ]
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [currentMonth] = useState<ContentMonth>(defaultJulyContent);
  const [availableMonths] = useState<ContentMonth[]>([defaultJulyContent]);
  const [isLoading] = useState(false);

  const switchToMonth = (monthId: string) => {
    // For now, we only have July content
    console.log('Switching to month:', monthId);
  };

  const createNewMonth = async (monthData: Partial<ContentMonth>) => {
    // For now, this is a no-op since we're keeping it simple
    console.log('Creating new month:', monthData);
  };

  const updateCurrentMonth = async (updates: Partial<ContentMonth>) => {
    // For now, this is a no-op since we're keeping it simple
    console.log('Updating current month:', updates);
  };

  return (
    <ContentContext.Provider value={{
      currentMonth,
      availableMonths,
      isLoading,
      switchToMonth,
      createNewMonth,
      updateCurrentMonth
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}