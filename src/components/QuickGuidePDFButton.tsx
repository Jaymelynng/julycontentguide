import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { generateQuickGuidePDF } from '../utils/quickGuidePDF';

export function QuickGuidePDFButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      await generateQuickGuidePDF();
    } catch (err) {
      console.error('PDF generation failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pdf-generator-container">
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`pdf-generator-btn pdf-download-btn ${isGenerating ? 'generating' : ''}`}
      >
        {isGenerating ? (
          <>
            <Loader2 className="pdf-btn-icon spinning" size={20} />
            Generating Quick Guide...
          </>
        ) : (
          <>
            <Download className="pdf-btn-icon" size={20} />
            📋 Download Quick Guide (PDF)
          </>
        )}
      </button>

      {error && (
        <div className="pdf-error-message">
          <FileText size={16} />
          <span>Error: {error}</span>
        </div>
      )}

      <div className="pdf-info-text">
        <span style={{ color: '#2d3748' }}>📄 3-page condensed checklist for quick reference</span>
      </div>
    </div>
  );
}