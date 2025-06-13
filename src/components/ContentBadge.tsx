import React from 'react';
import { Video, Camera, FileText } from 'lucide-react';

interface ContentBadgeProps {
  type: 'video' | 'photo' | 'series';
  label: string;
}

export function ContentBadge({ type, label }: ContentBadgeProps) {
  const getIcon = () => {
    switch (type) {
      case 'video':
        return '📹';
      case 'photo':
        return '📸';
      case 'series':
        return '📹';
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'video':
        return 'video-badge';
      case 'photo':
        return 'photo-badge';
      case 'series':
        return 'series-badge';
    }
  };

  return (
    <span className={`content-type-badge ${getColorClass()}`}>
      {getIcon()} {label}
    </span>
  );
}