import jsPDF from 'jspdf';

export const generateQuickGuidePDF = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  
  let yPosition = margin;
  
  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: string = '#000000') => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    pdf.setTextColor(color);
    
    const lines = pdf.splitTextToSize(text, contentWidth);
    
    // Check if we need a new page
    if (yPosition + (lines.length * fontSize * 0.35) > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
    
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * fontSize * 0.35 + 3;
  };
  
  // Helper function to add a section break
  const addSectionBreak = () => {
    yPosition += 5;
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = margin;
    }
  };
  
  // Header with gradient effect (simulated with color)
  pdf.setFillColor(212, 165, 165);
  pdf.rect(0, 0, pageWidth, 45, 'F');
  
  pdf.setTextColor('#FFFFFF');
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('📋 July Content Quick Guide', pageWidth / 2, 25, { align: 'center' });
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Essential checklist for content creators', pageWidth / 2, 35, { align: 'center' });
  
  yPosition = 55;
  
  // Quick Overview
  addText('🎯 MISSION', 14, true, '#8B4A4A');
  addText('Capture real moments that make your gym special—kids learning, trying new things, and having a blast. Show the smiles, teamwork, and "I did it!" moments that inspire families.', 10);
  
  addText('⏰ DEADLINE: June 30, 2025', 11, true, '#dc3545');
  addSectionBreak();
  
  // Content Checklist
  addText('📝 CONTENT CHECKLIST', 14, true, '#8B4A4A');
  addSectionBreak();
  
  // Task 1
  addText('1. Beat Summer Boredom (5 Videos)', 12, true);
  addText('📹 5 videos, 15-20 seconds each', 10, true);
  addText('✓ High-energy group activity', 9);
  addText('✓ Learning & progress moment', 9);
  addText('✓ Friendship & connection', 9);
  addText('✓ Gym personality & playfulness', 9);
  addText('✓ Happy & worn out kids', 9);
  addSectionBreak();
  
  // Task 2
  addText('2. 4th of July Fireworks (1 Photo)', 12, true);
  addText('📸 1 group action shot', 10, true);
  addText('✓ Kids mid-action (jumping, cheering)', 9);
  addText('✓ Peak excitement moment', 9);
  addSectionBreak();
  
  // Task 3
  addText('3. Handstand Contest (1 Video)', 12, true);
  addText('📹 20-30 second video', 10, true);
  addText('✓ Classic handstand contest', 9);
  addText('✓ Kids and/or coaches participating', 9);
  addText('✓ Fun energy and team spirit', 9);
  addSectionBreak();
  
  // Task 4
  addText('4. Confidence Photo (1 Photo)', 12, true);
  addText('📸 1 achievement photo', 10, true);
  addText('✓ Pure "I-did-it!" face', 9);
  addText('✓ Child achieving something big', 9);
  addSectionBreak();
  
  // Task 5
  addText('5. Coach vs Kid Race (1 Video)', 12, true);
  addText('📹 1 race video', 10, true);
  addText('✓ Start with "Ready, Set, Go!"', 9);
  addText('✓ End with reactions', 9);
  addText('✓ Coaches participating with kids', 9);
  addSectionBreak();
  
  // Task 6
  addText('6. Forward Roll Series (4 Photos)', 12, true);
  addText('📸 4 progression photos', 10, true);
  addText('✓ Hands up high', 9);
  addText('✓ Hands down low', 9);
  addText('✓ Look at your belly', 9);
  addText('✓ Over you go - TADAA!', 9);
  addSectionBreak();
  
  // Task 7
  addText('7. Free Trial Class (3 Photos)', 12, true);
  addText('📸 3 class action photos', 10, true);
  addText('✓ Group action shot', 9);
  addText('✓ Coach connecting with kids', 9);
  addText('✓ Gym personality highlight', 9);
  addSectionBreak();
  
  // Task 8
  addText('8. Balance Reel (3 Videos)', 12, true);
  addText('📹 3 beam videos with zoom effects', 10, true);
  addText('✓ Walking on beam (zoom on feet)', 9);
  addText('✓ Skill execution (zoom on movement)', 9);
  addText('✓ Dismount (zoom on landing)', 9);
  addSectionBreak();
  
  // New page for guidelines
  pdf.addPage();
  yPosition = margin;
  
  // Quick Guidelines
  addText('✅ QUICK GUIDELINES', 14, true, '#8B4A4A');
  addSectionBreak();
  
  addText('DO:', 12, true, '#28a745');
  addText('• Authentic smiles & breakthrough moments', 9);
  addText('• Proper technique & safe execution', 9);
  addText('• Clean, organized environment', 9);
  addText('• Natural interactions & teamwork', 9);
  addText('• High-quality, well-lit footage', 9);
  addSectionBreak();
  
  addText('DON\'T:', 12, true, '#dc3545');
  addText('• Incorrect technique or unsafe positions', 9);
  addText('• Inappropriate angles or awkward shots', 9);
  addText('• Blurry, dark, or poor quality footage', 9);
  addText('• Upset or frustrated children', 9);
  addText('• Cluttered backgrounds', 9);
  addSectionBreak();
  
  addText('💡 GOLDEN RULE', 12, true, '#8B4A4A');
  addText('Ask yourself: "Would I want this shared if it were my child?" If yes—film it! If you hesitate, don\'t.', 10, true);
  addSectionBreak();
  
  // Technical specs
  addText('⚙️ TECHNICAL SPECS', 12, true, '#8B4A4A');
  addText('• Photos: High resolution, well-lit', 9);
  addText('• Format: Vertical preferred (landscape OK)', 9);
  addText('• Quality: Clear, steady, in focus', 9);
  addText('• Composition: Full body in frame', 9);
  addSectionBreak();
  
  // File naming
  addText('🏷️ FILE NAMING', 12, true, '#8B4A4A');
  addText('Use descriptive names like:', 10);
  addText('• HandstandContest', 9);
  addText('• BeatBoredom', 9);
  addText('• ForwardRoll', 9);
  addText('• ConfidencePhoto', 9);
  addSectionBreak();
  
  // Submission process
  addText('📤 SUBMISSION PROCESS', 12, true, '#8B4A4A');
  addText('1. Select your gym location', 9);
  addText('2. Name your content descriptively', 9);
  addText('3. Upload files to SharePoint', 9);
  addText('4. Rename files in SharePoint manually', 9);
  addSectionBreak();
  
  // Footer
  yPosition = pageHeight - 30;
  pdf.setFillColor(240, 240, 240);
  pdf.rect(0, yPosition - 5, pageWidth, 25, 'F');
  
  pdf.setTextColor('#666666');
  pdf.setFontSize(8);
  pdf.text('For detailed instructions, visit the full web guide at your gym\'s content portal', pageWidth / 2, yPosition + 5, { align: 'center' });
  pdf.text('Questions? Reach out to your content coordinator anytime!', pageWidth / 2, yPosition + 12, { align: 'center' });
  
  // Save the PDF
  pdf.save('July-Content-Quick-Guide.pdf');
};