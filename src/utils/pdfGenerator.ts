import jsPDF from 'jspdf';

export const generatePDF = async () => {
  try {
    // Create new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
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
      yPosition += lines.length * fontSize * 0.35 + 5;
    };

    // Helper function to add section divider
    const addDivider = () => {
      yPosition += 10;
      pdf.setDrawColor('#D4A5A5');
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 15;
    };

    // Header
    pdf.setFillColor(212, 165, 165);
    pdf.rect(0, 0, pageWidth, 60, 'F');
    
    pdf.setTextColor('#FFFFFF');
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('📣 July Content', pageWidth / 2, 25, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    const subtitle = 'Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.';
    const subtitleLines = pdf.splitTextToSize(subtitle, contentWidth);
    pdf.text(subtitleLines, pageWidth / 2, 35, { align: 'center' });
    
    yPosition = 80;

    // Table of Contents
    addText('📋 Table of Contents', 16, true, '#8B4A4A');
    yPosition += 5;
    
    const tocItems = [
      '1. 5 Epic Ways to Beat Summer Boredom - 📹 REEL | 5 VIDEOS',
      '2. 4th of July Fireworks - 📸 PHOTO | 1 PHOTO',
      '3. Handstand Contest!!! - 📹 REEL | 1 VIDEO',
      '4. 1 Photo The Secret to Confidence That Lasts Beyond Summer - 📸 PHOTO | 1 PHOTO',
      '5. 1 Video "Can You Keep Up?" – Coach vs. Kid Race - 📹 REEL | 1 VIDEO',
      '6. 4 Photo Riddle Week – Forward Roll Series - 📸 PHOTOS | 4 PHOTOS',
      '7. 3 Photos "Not Sure What to Expect?" – We\'ll Show You- FREE TRIAL - 📸 PHOTOS | 3 PHOTOS',
      '8. 3 Video Balance Reel - 📹 REEL | 3 VIDEOS'
    ];
    
    tocItems.forEach(item => {
      addText(item, 10, false, '#2d3748');
    });

    addDivider();

    // Content Format Structure
    addText('Content Format Structure', 14, true, '#8B4A4A');
    addText('Every section follows this simple format:', 10, false, '#2d3748');
    yPosition += 5;
    addText('Title', 10, true, '#2d3748');
    addText('🎯 Post Type / # Amount / Visual: What the post is capturing emotionally/visually. This is a clear, direct description of what the viewer should see.', 10, false, '#2d3748');
    addText('📌 Content Notes: Technical must-knows (length, edit-free, timing, etc.)', 10, false, '#2d3748');
    addText('🎥 What to Upload: Clear list (Photo 1, Photo 2… OR Video 1, Video 2…). Each piece of content can include collapsible tips below if needed.', 10, false, '#2d3748');
    addText('💡 Reminders/Tips (Optional):', 10, false, '#2d3748');

    addDivider();

    // Content Sections
    addText('📱 CONTENT TASKS', 18, true, '#8B4A4A');
    addDivider();

    // Section 1: 5 Epic Ways to Beat Summer Boredom
    addText('5 Epic Ways to Beat Summer Boredom', 14, true, '#8B4A4A');
    addText('📹 REEL | 5 VIDEOS | 15-20 seconds each', 12, true, '#B08A8A');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Five clips that visually show the variety and value of summer camp, highlighting fun for kids and demonstrating value to parents. Think energy, friendship, new skills, and adventure.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('• Record 5 clips total', 10, false, '#2d3748');
    addText('• Each should be 15–20 seconds long', 10, false, '#2d3748');
    addText('• You should only upload the final, trimmed clips—each one should show exactly what you want used in the final post.', 10, false, '#2d3748');
    addText('• If you\'d like to include multiple angles, effects, or cuts, that\'s encouraged—just edit them into a single 15–20 second clip before uploading.', 10, false, '#2d3748');
    addText('• What you submit should be post-ready and require no further trimming or cleanup. I\'ll handle stitching the final clips together with transitions.', 10, false, '#2d3748');
    
    addText('🎥 UPLOAD THESE 5 VIDEOS:', 11, true, '#8B4A4A');
    
    addText('📹 Video 1: Group/Team Activity – High-Energy and Physical', 10, true, '#2d3748');
    addText('• Kids feel: excited, energized—this place looks like so much fun!', 10, false, '#2d3748');
    addText('• Parents value: teamwork, physical activity', 10, false, '#2d3748');
    
    addText('📹 Video 2: Learning & Progress', 10, true, '#2d3748');
    addText('• Kids feel: eager to show off a new skill', 10, false, '#2d3748');
    addText('• Parents value: personal growth, progress', 10, false, '#2d3748');
    
    addText('📹 Video 3: Friendship & Connection', 10, true, '#2d3748');
    addText('• Kids feel: excited to have fun with friends or make new ones', 10, false, '#2d3748');
    addText('• Parents value: social growth, new experiences, lasting memories', 10, false, '#2d3748');
    
    addText('📹 Video 4: Gym Personality & Playfulness', 10, true, '#2d3748');
    addText('• Kids feel: how fun the gym is and how cool the coaches are', 10, false, '#2d3748');
    addText('• Parents value: playful, positive role models and a healthy environment', 10, false, '#2d3748');
    
    addText('📹 Video 5: Happy & Worn Out', 10, true, '#2d3748');
    addText('• Kids feel: fulfilled, can\'t wait to come back tomorrow', 10, false, '#2d3748');
    addText('• Parents value: a full, active, happy day', 10, false, '#2d3748');

    addDivider();

    // Section 2: 4th of July Fireworks
    addText('4th of July Fireworks', 14, true, '#8B4A4A');
    addText('📸 PHOTO | 1 PHOTO', 12, true, '#9A8A9A');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Kids caught mid-action, like jumping or cheering, at the peak moment-think fireworks.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Focus on capturing one clear, bright image that highlights excitement at its peak. Ensure the photo is well-lit and crisp no blur.', 10, false, '#2d3748');
    
    addText('📷 UPLOAD THIS 1 PHOTO:', 11, true, '#8B4A4A');
    addText('📸 One group action shot', 10, true, '#2d3748');
    addText('Example: Throwing pit cubs.jumping into pit', 10, false, '#2d3748');

    addDivider();

    // Section 3: Handstand Contest
    addText('Handstand Contest!!!', 14, true, '#8B4A4A');
    addText('📹 REEL | 1 VIDEO | 20-30 seconds', 12, true, '#B08A8A');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Organize a classic handstand contest. Can be walking or no walking! Include kids of any and all levels in your gym—the more mix, the better! Kids, coaches, or both. Get creative with locations: beam handstands, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! Catch the fun energy and team spirit.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('• Submit one final video, 20–30 seconds total, from start to finish that captures a classic handstand contest.', 10, false, '#2d3748');
    addText('• It\'s encouraged to include multiple clips, angles, or views—just make sure they are put together before uploading so it plays as one smooth video.', 10, false, '#2d3748');
    addText('• If you\'re not sure how to do that, just let me know—I can help.', 10, false, '#2d3748');
    
    addText('🎥 UPLOAD THIS 1 VIDEO:', 11, true, '#8B4A4A');
    addText('📹 One 20–30 second continuous video capturing the full contest', 10, true, '#2d3748');

    addDivider();

    // Section 4: Confidence Photo
    addText('1 Photo The Secret to Confidence That Lasts Beyond Summer', 14, true, '#8B4A4A');
    addText('📸 PHOTO | 1 PHOTO', 12, true, '#9A8A9A');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Core Visual: A pure "I-did-it!" face!', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Choose one powerful, clear image that radiates confidence. It should be that photo that instantly makes you smile. Highlight the child\'s face and emotion in action.', 10, false, '#2d3748');
    
    addText('📷 UPLOAD THIS 1 PHOTO:', 11, true, '#8B4A4A');
    addText('📸 One incredible photo of a child achieving something big (rope climb, ninja course, new skill, etc.)', 10, true, '#2d3748');

    addDivider();

    // Section 5: Coach vs Kid Race
    addText('1 Video "Can You Keep Up?" – Coach vs. Kid Race', 14, true, '#8B4A4A');
    addText('📹 REEL | 1 VIDEO', 12, true, '#B08A8A');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Coaches participating in obstacle course/race activities with kids—showing coaches actually doing camp games and challenges alongside campers.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Film one continuous race from start ("Ready, Set, Go!") to final reactions. Capture both action and fun! Focus on the playful interaction between coaches and kids. can be one or multiple shots angles', 10, false, '#2d3748');
    
    addText('🎥 UPLOAD THIS 1 VIDEO:', 11, true, '#8B4A4A');
    addText('📹 One full video: Start with "Ready, Set, Go!" → End after reactions', 10, true, '#2d3748');

    addDivider();

    // Section 6: Riddle Week
    addText('4 Photo Riddle Week – Forward Roll Series', 14, true, '#8B4A4A');
    addText('📸 PHOTOS | 4 PHOTOS', 12, true, '#B5B5B5');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Preschoolers in motion—showing curiosity, movement, and joyful progress through a forward roll.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Use one child to show all 4 steps clearly. You should clearly see each phase of the roll - full shot - clear no blur concept.', 10, false, '#2d3748');
    
    addText('📷 UPLOAD THESE 4 PHOTOS:', 11, true, '#8B4A4A');
    addText('📸 4 photos showing each stage of a forward roll:', 10, true, '#2d3748');
    addText('1. 📸 Photo 1: Hands Up High', 10, false, '#2d3748');
    addText('2. 📸 Photo 2: Hands Down Low', 10, false, '#2d3748');
    addText('3. 📸 Photo 3: Look at Your Belly', 10, false, '#2d3748');
    addText('4. 📸 Photo 4: Over You Go – TADAA!', 10, false, '#2d3748');

    addDivider();

    // Section 7: Trial Class
    addText('3 Photos "Not Sure What to Expect?" – We\'ll Show You- FREE TRIAL', 14, true, '#8B4A4A');
    addText('📸 PHOTOS | 3 PHOTOS', 12, true, '#B5B5B5');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('A high-energy class in action—coaches involved, kids smiling, and real learning happening.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Grab those perfect moments where the energy and fun are obvious—think high-fives, big smiles, and kids in the middle of the action. No stiff poses, just real, awesome moments. Goal is to encourage people to try free trial classes and show off your gym equipment and fun atmosphere.', 10, false, '#2d3748');
    
    addText('📷 UPLOAD THESE 3 PHOTOS:', 11, true, '#8B4A4A');
    addText('• 📸 Photo 1: A group action shot of a class in action—kids playing together, smiling, and having a blast.', 10, false, '#2d3748');
    addText('• 📸 Photo 2: A coach connecting with kids in class—think high-fives, spotting a skill, or a teaching moment.', 10, false, '#2d3748');
    addText('• 📸 Photo 3: Anything that makes you smile and highlights your gym\'s personality—use equipment, displays, or decorations that show off what makes your gym unique.', 10, false, '#2d3748');

    addDivider();

    // Section 8: Balance Reel
    addText('3 Video Balance Reel', 14, true, '#8B4A4A');
    addText('📹 REEL | 3 VIDEOS', 12, true, '#B5B5B5');
    yPosition += 5;
    
    addText('🎯 Post Visual:', 11, true, '#8B4A4A');
    addText('Show off balance in a fun, creative way using three short clips. Capture movement with control, cool angles, and a confident finish—something that feels interactive and visually interesting. Give parents a view they don\'t usually get to see.', 10, false, '#2d3748');
    
    addText('📌 Content Notes:', 11, true, '#8B4A4A');
    addText('Use smooth zoom transitions for dramatic effect. Capture different angles for variety. Focus on precision and control in movements.', 10, false, '#2d3748');
    
    addText('🎥 UPLOAD THESE 3 VIDEOS:', 11, true, '#8B4A4A');
    
    addText('📹 Video 1: Walking on Beam', 10, true, '#2d3748');
    addText('🎬 Scene 1: Walking on Beam', 10, true, '#2d3748');
    addText('Start with a straight-down-the-beam view. Gymnast walks slowly toward the camera. This is perspective from the end of the beam so they see what doing skills on a 4 inch beam really looks like.', 10, false, '#2d3748');
    addText('Camera: Start wide → zoom in closer towards their feet as they balance', 10, false, '#2d3748');
    yPosition += 5;
    
    addText('📹 Video 2: Skill – Zoom to Movement', 10, true, '#2d3748');
    addText('🎬 Scene 2: Skill – Zoom to Movement', 10, true, '#2d3748');
    addText('Switch to a side view of the gymnast on beam. Film one dynamic beam skill of the athlete\'s choice—anything that shows action and control.', 10, false, '#2d3748');
    addText('Camera: Begin wide → zoom in on the movement to highlight precision.', 10, false, '#2d3748');
    yPosition += 5;
    
    addText('📹 Video 3: Dismount – Zoom to Landing', 10, true, '#2d3748');
    addText('🎬 Scene 3: Dismount – Zoom to Landing', 10, true, '#2d3748');
    addText('Film from a new angle (diagonal or front corner preferred). Show the entire dismount, from prep to stick + salute.', 10, false, '#2d3748');
    addText('Camera: Full shot → zoom in on the landing or arms lifting in salute.', 10, false, '#2d3748');

    // Save the PDF
    pdf.save('July-Content.pdf');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};