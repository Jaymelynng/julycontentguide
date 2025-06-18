import jsPDF from 'jspdf';

export const generateFullContentPDF = async () => {
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
    yPosition += 8;
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = margin;
    }
  };
  
  // Header
  pdf.setFillColor(212, 165, 165);
  pdf.rect(0, 0, pageWidth, 50, 'F');
  
  pdf.setTextColor('#FFFFFF');
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('📣 July Content Mission', pageWidth / 2, 25, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Your Complete Guide to Capturing Summer Magic', pageWidth / 2, 35, { align: 'center' });
  
  yPosition = 60;
  
  // Mission Statement
  addText('Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.', 12, true);
  
  addText('All content must be collected in June and submitted by June 30, 2025 for posting in July.', 11, true, '#dc3545');
  
  addSectionBreak();
  
  // Table of Contents
  addText('📋 TABLE OF CONTENTS', 16, true, '#8B4A4A');
  addText('1. 5 Epic Ways to Beat Summer Boredom - 📹 REEL | 5 VIDEOS', 10);
  addText('2. 4th of July Fireworks - 📸 PHOTO | 1 PHOTO', 10);
  addText('3. Handstand Contest!!! - 📹 REEL | 1 VIDEO', 10);
  addText('4. The Secret to Confidence That Lasts Beyond Summer - 📸 PHOTO | 1 PHOTO', 10);
  addText('5. "Can You Keep Up?" – Coach vs. Kid Race - 📹 REEL | 1 VIDEO', 10);
  addText('6. Riddle Week – Forward Roll Series - 📸 PHOTOS | 4 PHOTOS', 10);
  addText('7. "Not Sure What to Expect?" – We\'ll Show You - FREE TRIAL - 📸 PHOTOS | 3 PHOTOS', 10);
  addText('8. Balance Reel - 📹 REEL | 3 VIDEOS', 10);
  
  addSectionBreak();
  
  // Content Format Structure
  addText('CONTENT FORMAT STRUCTURE', 14, true, '#8B4A4A');
  addText('Every section follows this simple format:', 10);
  addText('• Title', 10, true);
  addText('• 🎯 Post Type / # Amount / Visual: What the post is capturing emotionally/visually', 10, true);
  addText('• 📌 Content Notes: Technical must-knows (length, edit-free, timing, etc.)', 10, true);
  addText('• 🎥 What to Upload: Clear list (Photo 1, Photo 2… OR Video 1, Video 2…)', 10, true);
  addText('• 💡 Reminders/Tips (Optional)', 10, true);
  
  addSectionBreak();
  
  // Start new page for content tasks
  pdf.addPage();
  yPosition = margin;
  
  addText('📱 CONTENT TASKS', 18, true, '#8B4A4A');
  addSectionBreak();
  
  // Task 1: Beat Boredom
  addText('1. 5 Epic Ways to Beat Summer Boredom', 14, true, '#8B4A4A');
  addText('📹 REEL | 5 VIDEOS | 15-20 seconds each', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Five clips that visually show the variety and value of summer camp, highlighting fun for kids and demonstrating value to parents. Think energy, friendship, new skills, and adventure.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Record 5 clips total', 10);
  addText('• Each should be 15–20 seconds long', 10);
  addText('• Upload final, trimmed clips—each should show exactly what you want used', 10);
  addText('• Multiple angles/effects encouraged—edit into single 15–20 second clip before uploading', 10);
  addText('• Submit post-ready content requiring no further trimming', 10);
  
  addText('🎥 UPLOAD THESE 5 VIDEOS:', 11, true);
  addText('📹 Video 1: Group/Team Activity – High-Energy and Physical', 10, true);
  addText('• Kids feel: excited, energized—this place looks like so much fun!', 10);
  addText('• Parents value: teamwork, physical activity', 10);
  
  addText('📹 Video 2: Learning & Progress', 10, true);
  addText('• Kids feel: eager to show off a new skill', 10);
  addText('• Parents value: personal growth, progress', 10);
  
  addText('📹 Video 3: Friendship & Connection', 10, true);
  addText('• Kids feel: excited to have fun with friends or make new ones', 10);
  addText('• Parents value: social growth, new experiences, lasting memories', 10);
  
  addText('📹 Video 4: Gym Personality & Playfulness', 10, true);
  addText('• Kids feel: how fun the gym is and how cool the coaches are', 10);
  addText('• Parents value: playful, positive role models and healthy environment', 10);
  
  addText('📹 Video 5: Happy & Worn Out', 10, true);
  addText('• Kids feel: fulfilled, can\'t wait to come back tomorrow', 10);
  addText('• Parents value: a full, active, happy day', 10);
  
  addSectionBreak();
  
  // Task 2: 4th of July
  addText('2. 4th of July Fireworks', 14, true, '#8B4A4A');
  addText('📸 PHOTO | 1 PHOTO', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Kids caught mid-action, like jumping or cheering, at the peak moment—think fireworks.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Focus on capturing one clear, bright image that highlights excitement at its peak. Ensure the photo is well-lit and crisp—no blur.', 10);
  
  addText('📷 UPLOAD THIS 1 PHOTO:', 11, true);
  addText('📸 One group action shot', 10, true);
  addText('Example: Throwing pit cubes, jumping into pit', 10);
  
  addSectionBreak();
  
  // Task 3: Handstand Contest
  addText('3. Handstand Contest!!!', 14, true, '#8B4A4A');
  addText('📹 REEL | 1 VIDEO | 20-30 seconds', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Organize a classic handstand contest. Can be walking or no walking! Include kids of any and all levels in your gym—the more mix, the better! Kids, coaches, or both. Get creative with locations: beam handstands, vault table, or any part of the gym. Catch the fun energy and team spirit.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('• Submit one final video, 20–30 seconds total, from start to finish', 10);
  addText('• Multiple clips/angles encouraged—put together before uploading', 10);
  addText('• Should play as one smooth video', 10);
  
  addText('🎥 UPLOAD THIS 1 VIDEO:', 11, true);
  addText('📹 One 20–30 second continuous video capturing the full contest', 10, true);
  
  addSectionBreak();
  
  // Task 4: Confidence
  addText('4. The Secret to Confidence That Lasts Beyond Summer', 14, true, '#8B4A4A');
  addText('📸 PHOTO | 1 PHOTO', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Core Visual: A pure "I-did-it!" face!', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Choose one powerful, clear image that radiates confidence. It should be that photo that instantly makes you smile. Highlight the child\'s face and emotion in action.', 10);
  
  addText('📷 UPLOAD THIS 1 PHOTO:', 11, true);
  addText('📸 One incredible photo of a child achieving something big (rope climb, ninja course, new skill, etc.)', 10, true);
  
  addSectionBreak();
  
  // Task 5: Coach vs Kid Race
  addText('5. "Can You Keep Up?" – Coach vs. Kid Race', 14, true, '#8B4A4A');
  addText('📹 REEL | 1 VIDEO', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Coaches participating in obstacle course/race activities with kids—showing coaches actually doing camp games and challenges alongside campers.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Film one continuous race from start ("Ready, Set, Go!") to final reactions. Capture both action and fun! Focus on the playful interaction between coaches and kids. Can be one or multiple shot angles.', 10);
  
  addText('🎥 UPLOAD THIS 1 VIDEO:', 11, true);
  addText('📹 One full video: Start with "Ready, Set, Go!" → End after reactions', 10, true);
  
  addSectionBreak();
  
  // Task 6: Riddle Week
  addText('6. Riddle Week – Forward Roll Series', 14, true, '#8B4A4A');
  addText('📸 PHOTOS | 4 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Preschoolers in motion—showing curiosity, movement, and joyful progress through a forward roll.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Use one child to show all 4 steps clearly. You should clearly see each phase of the roll—full shot, clear, no blur concept.', 10);
  
  addText('📷 UPLOAD THESE 4 PHOTOS:', 11, true);
  addText('📸 4 photos showing each stage of a forward roll:', 10, true);
  addText('1. 📸 Photo 1: Hands Up High', 10);
  addText('2. 📸 Photo 2: Hands Down Low', 10);
  addText('3. 📸 Photo 3: Look at Your Belly', 10);
  addText('4. 📸 Photo 4: Over You Go – TADAA!', 10);
  
  addSectionBreak();
  
  // Task 7: Free Trial
  addText('7. "Not Sure What to Expect?" – We\'ll Show You - FREE TRIAL', 14, true, '#8B4A4A');
  addText('📸 PHOTOS | 3 PHOTOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('A high-energy class in action—coaches involved, kids smiling, and real learning happening.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Grab those perfect moments where the energy and fun are obvious—think high-fives, big smiles, and kids in the middle of the action. No stiff poses, just real, awesome moments. Goal is to encourage people to try free trial classes and show off your gym equipment and fun atmosphere.', 10);
  
  addText('📷 UPLOAD THESE 3 PHOTOS:', 11, true);
  addText('📸 Photo 1: A group action shot of a class in action—kids playing together, smiling, and having a blast.', 10);
  addText('📸 Photo 2: A coach connecting with kids in class—think high-fives, spotting a skill, or a teaching moment.', 10);
  addText('📸 Photo 3: Anything that makes you smile and highlights your gym\'s personality—use equipment, displays, or decorations that show off what makes your gym unique.', 10);
  
  addSectionBreak();
  
  // Task 8: Balance Reel
  addText('8. Balance Reel', 14, true, '#8B4A4A');
  addText('📹 REEL | 3 VIDEOS', 11, true);
  
  addText('🎯 Post Visual:', 11, true);
  addText('Show off balance in a fun, creative way using three short clips. Capture movement with control, cool angles, and a confident finish—something that feels interactive and visually interesting. Give parents a view they don\'t usually get to see.', 10);
  
  addText('📌 Content Notes:', 11, true);
  addText('Use smooth zoom transitions for dramatic effect. Capture different angles for variety. Focus on precision and control in movements.', 10);
  
  addText('🎥 UPLOAD THESE 3 VIDEOS:', 11, true);
  
  addText('📹 Video 1: Walking on Beam', 10, true);
  addText('🎬 Scene 1: Walking on Beam', 10, true);
  addText('Start with a straight-down-the-beam view. Gymnast walks slowly toward the camera. This is perspective from the end of the beam so they see what doing skills on a 4 inch beam really looks like.', 10);
  addText('Camera: Start wide → zoom in closer towards their feet as they balance', 10);
  
  addText('📹 Video 2: Skill – Zoom to Movement', 10, true);
  addText('🎬 Scene 2: Skill – Zoom to Movement', 10, true);
  addText('Switch to a side view of the gymnast on beam. Film one dynamic beam skill of the athlete\'s choice—anything that shows action and control.', 10);
  addText('Camera: Begin wide → zoom in on the movement to highlight precision.', 10);
  
  addText('📹 Video 3: Dismount – Zoom to Landing', 10, true);
  addText('🎬 Scene 3: Dismount – Zoom to Landing', 10, true);
  addText('Film from a new angle (diagonal or front corner preferred). Show the entire dismount, from prep to stick + salute.', 10);
  addText('Camera: Full shot → zoom in on the landing or arms lifting in salute.', 10);
  
  // Add new page for guidelines
  pdf.addPage();
  yPosition = margin;
  
  addText('📋 CONTENT GUIDELINES', 16, true, '#8B4A4A');
  addSectionBreak();
  
  addText('✅ DO THIS - What Makes Great Content', 12, true, '#28a745');
  addText('• Kids learning and making genuine progress', 10);
  addText('• Authentic smiles and breakthrough moments', 10);
  addText('• Proper technique and safe skill execution', 10);
  addText('• Clean, organized gym environment', 10);
  addText('• Coaches actively teaching and encouraging', 10);
  addText('• Natural interactions and teamwork', 10);
  addText('• Good form and clean space', 10);
  addText('• Natural joy and positive coach energy', 10);
  addText('• Safe, appropriate filming', 10);
  
  addSectionBreak();
  
  addText('❌ NOT THIS - Red Flags', 12, true, '#dc3545');
  addText('• Skills with incorrect technique (arched backs, bent knees, heads turned wrong way)', 10);
  addText('• Inappropriate angles or revealing positions', 10);
  addText('• No low shots, wide straddles, nothing awkward', 10);
  addText('• Clothing malfunctions or exposure', 10);
  addText('• Blurry, dark, or poor quality footage', 10);
  addText('• Cluttered backgrounds with equipment out of place', 10);
  addText('• Kids who are upset, crying, or frustrated', 10);
  addText('• Forced or awkward moments', 10);
  addText('• Distracted or unengaged coaching', 10);
  
  addSectionBreak();
  
  addText('💡 THE GOLDEN RULE', 12, true, '#8B4A4A');
  addText('Before hitting record, ask yourself: "Would I want this shared if it were my child?" If yes—film it! If you hesitate, don\'t.', 10, true);
  
  addSectionBreak();
  
  addText('⚙️ TECHNICAL STANDARDS', 14, true, '#8B4A4A');
  addSectionBreak();
  
  addText('📱 Video & Photo Specs', 12, true);
  addText('• Photos: High resolution, well-lit', 10);
  addText('• Format: Vertical preferred for social (landscape also acceptable)', 10);
  addText('• Quality: Clear, steady, in focus', 10);
  addText('• Composition: Full body in frame', 10);
  
  addSectionBreak();
  
  addText('Before Submitting - Check These:', 12, true);
  addText('• Is the technique clean and safe?', 10);
  addText('• Is the angle respectful and not awkward?', 10);
  addText('• Is the moment authentic (not staged for the camera)?', 10);
  addText('• Is the background good?', 10);
  addText('• Is sound good?', 10);
  addText('• Is the lighting solid?', 10);
  
  // Save the PDF
  pdf.save('July-Content-Complete-Guide.pdf');
};