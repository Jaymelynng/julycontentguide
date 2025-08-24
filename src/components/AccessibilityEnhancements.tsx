import React, { useEffect } from 'react';

export function AccessibilityEnhancements() {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #8B5CF6;
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      transition: top 0.3s;
      z-index: 10000;
      font-weight: 600;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Announce page changes for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(announcer);

    // Enhanced keyboard navigation
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Alt + M to focus main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          announcer.textContent = 'Focused on main content';
        }
      }
      
      // Alt + S to focus sidebar
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        const firstButton = sidebar?.querySelector('button');
        if (firstButton) {
          (firstButton as HTMLElement).focus();
          announcer.textContent = 'Focused on navigation';
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (announcer.parentNode) {
        announcer.parentNode.removeChild(announcer);
      }
    };
  }, []);

  return null;
}