import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, FileText, Loader2 } from 'lucide-react';

interface PDFGeneratorButtonProps {
  targetElementId: string;
  filename?: string;
  buttonText?: string;
  className?: string;
}

export function PDFGeneratorButton({ 
  targetElementId, 
  filename = 'document.pdf',
  buttonText = 'Generate PDF',
  className = ''
}: PDFGeneratorButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePdf = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      // Find the target element
      const element = document.getElementById(targetElementId);
      if (!element) {
        throw new Error(`Element with ID "${targetElementId}" not found`);
      }

      // Configure html2canvas options for better quality
      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      // Calculate dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      // Add the image to PDF
      const imgData = canvas.toDataURL('image/png');
      
      // If content fits on one page
      if (heightLeft <= pageHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Multi-page handling
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
      }

      // Save the PDF
      pdf.save(filename);

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
        onClick={generatePdf}
        disabled={isGenerating}
        className={`pdf-generator-btn ${className} ${isGenerating ? 'generating' : ''}`}
      >
        {isGenerating ? (
          <>
            <Loader2 className="pdf-btn-icon spinning" size={20} />
            Generating PDF...
          </>
        ) : (
          <>
            <Download className="pdf-btn-icon" size={20} />
            {buttonText}
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
        <span>📄 This will capture the current content and convert it to a PDF document</span>
      </div>
    </div>
  );
}