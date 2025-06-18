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
  pdf.text('July Content - Quick Guide', pageWidth / 2, 25, { align: 'center' });
  
  yPosition = 55;
  
  // Content Tasks Header
  addText('Content Tasks', 16, true, '#8B4A4A');
  addSectionBreak();
  
  // Task List
  addText('5 Epic Ways to Beat Summer Boredom - REEL | 5 VIDEOS', 10);
  addText('4th of July Fireworks - PHOTO | 1 PHOTO', 10);
  addText('Handstand Contest!!! - REEL | 1 VIDEO', 10);
  addText('The Secret to Confidence That Lasts Beyond Summer - PHOTO | 1 PHOTO', 10);
  addText('"Can You Keep Up?" – Coach vs. Kid Race - REEL | 1 VIDEO', 10);
  addText('Riddle Week – Forward Roll Series - PHOTOS | 4 PHOTOS', 10);
  addText('"Not Sure What to Expect?" – We\'ll Show You- FREE TRIAL - PHOTOS | 3 PHOTOS', 10);
  addText('Balance Reel - REEL | 3 VIDEOS', 10);
  
  addSectionBreak();
  addSectionBreak();
  
  // Task 1
  addText('1. 5 Epic Ways to Beat Summer Boredom', 12, true, '#8B4A4A');
  addText('REEL | 5 VIDEOS | 15-20 seconds each', 10, true);
  addText('Video 1: Group/Team Activity – High-Energy and Physical', 10, true);
  addText('Video 2: Learning & Progress', 10, true);
  addText('Video 3: Friendship & Connection', 10, true);
  addText('Video 4: Gym Personality & Playfulness', 10, true);
  addText('Video 5: Happy & Worn Out', 10, true);
  addSectionBreak();
  
  // Task 2
  addText('2. 4th of July Fireworks', 12, true, '#8B4A4A');
  addText('PHOTO | 1 PHOTO', 10, true);
  addText('One group action shot', 10, true);
  addText('Kids caught mid-action, like jumping or cheering, at the peak moment-think fireworks.', 10);
  addText('Example: Throwing pit cubs.jumping into pit', 10);
  addSectionBreak();
  
  // Task 3
  addText('3. Handstand Contest!!!', 12, true, '#8B4A4A');
  addText('REEL | 1 VIDEO | 20-30 seconds', 10, true);
  addText('One 20–30 second continuous video capturing the full contest', 10, true);
  addText('Include kids of any and all levels. Get creative with locations: beam handstands, vault table, or any part of the gym.', 10);
  addSectionBreak();
  
  // Task 4
  addText('4. The Secret to Confidence That Lasts Beyond Summer', 12, true, '#8B4A4A');
  addText('PHOTO | 1 PHOTO', 10, true);
  addText('One incredible photo of a child achieving something big', 10, true);
  addText('Core Visual: A pure "I-did-it!" face! It should be that photo that instantly makes you smile.', 10);
  addSectionBreak();
  
  // Task 5
  addText('5. "Can You Keep Up?" – Coach vs. Kid Race', 12, true, '#8B4A4A');
  addText('REEL | 1 VIDEO', 10, true);
  addText('One full video: Start with "Ready, Set, Go!" → End after reactions', 10, true);
  addText('Coaches participating in obstacle course/race activities with kids—showing coaches actually doing camp games and challenges alongside campers.', 10);
  addSectionBreak();
  
  // Task 6
  addText('6. Riddle Week – Forward Roll Series', 12, true, '#8B4A4A');
  addText('PHOTOS | 4 PHOTOS', 10, true);
  addText('Use one child to show all 4 steps clearly. You should clearly see each phase of the roll - full shot - clear no blur concept.', 10);
  addText('Photo 1: Hands Up High', 10, true);
  addText('Photo 2: Hands Down Low', 10, true);
  addText('Photo 3: Look at Your Belly', 10, true);
  addText('Photo 4: Over You Go – TADAA!', 10, true);
  addSectionBreak();
  
  // Task 7
  addText('7. "Not Sure What to Expect?" – We\'ll Show You- FREE TRIAL', 12, true, '#8B4A4A');
  addText('PHOTOS | 3 PHOTOS', 10, true);
  addText('Photo 1: A group action shot of a class in action—kids playing together, smiling, and having a blast.', 10, true);
  addText('Photo 2: A coach connecting with kids in class—think high-fives, spotting a skill, or a teaching moment.', 10, true);
  addText('Photo 3: Anything that makes you smile and highlights your gym\'s personality—use equipment, displays, or decorations that show off what makes your gym unique.', 10, true);
  addSectionBreak();
  
  // Task 8
  addText('8. Balance Reel', 12, true, '#8B4A4A');
  addText('REEL | 3 VIDEOS', 10, true);
  addText('Video 1: Walking on Beam', 10, true);
  addText('Beam perspective view. Gymnast walks slowly toward the camera.', 10);
  addText('Video 2: Skill', 10, true);
  addText('Switch to a side view of the gymnast on beam. Film one dynamic beam skill of the athlete\'s choice—anything that shows action and control.', 10);
  addText('Video 3: Dismount', 10, true);
  addText('Film from a new angle. Show the entire dismount, from prep to stick + salute.', 10);
  
  // Save the PDF
  pdf.save('July-Content-Quick-Guide.pdf');
};