export const generatePDF = () => {
  // Create a new window for the PDF content
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow popups to download the PDF');
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>July Content Guide</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: white;
            padding: 40px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #D4A5A5, #B08A8A);
            border-radius: 20px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '🤸‍♀️ ⭐ 🏆 💪';
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            font-size: 24px;
            opacity: 0.3;
            letter-spacing: 40px;
        }
        
        .main-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .mission-statement {
            background: linear-gradient(135deg, #E8D5D5, #f0e6e6);
            padding: 30px;
            border-radius: 16px;
            margin: 30px 0;
            text-align: center;
            border-left: 6px solid #B08A8A;
        }
        
        .mission-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .mission-text {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .deadline-highlight {
            background: rgba(176, 138, 138, 0.2);
            padding: 15px;
            border-radius: 8px;
            font-weight: 600;
            border: 2px solid #B08A8A;
        }
        
        .deadline {
            color: #dc3545;
            font-weight: 700;
        }
        
        .toc {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 12px;
            margin: 30px 0;
            border: 2px solid #E8D5D5;
        }
        
        .toc h2 {
            font-family: 'Montserrat', sans-serif;
            color: #8B4A4A;
            font-size: 24px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .toc-list {
            list-style: none;
            counter-reset: toc-counter;
        }
        
        .toc-item {
            counter-increment: toc-counter;
            margin-bottom: 12px;
            padding: 12px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #D4A5A5;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .toc-item::before {
            content: counter(toc-counter) ". ";
            font-weight: 700;
            color: #8B4A4A;
        }
        
        .format-structure {
            background: #fff3cd;
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
            border: 2px solid #ffc107;
        }
        
        .format-structure h2 {
            font-family: 'Montserrat', sans-serif;
            color: #856404;
            margin-bottom: 15px;
        }
        
        .content-section {
            margin: 40px 0;
            padding: 30px;
            background: white;
            border-radius: 12px;
            border: 2px solid #E8D5D5;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            page-break-inside: avoid;
        }
        
        .section-title {
            font-family: 'Montserrat', sans-serif;
            color: #8B4A4A;
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 15px;
            text-align: center;
            border-bottom: 3px solid #D4A5A5;
            padding-bottom: 10px;
        }
        
        .badge {
            display: inline-block;
            background: #D4A5A5;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-left: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .video-badge { background: #B08A8A; }
        .photo-badge { background: #9A8A9A; }
        .series-badge { background: #B5B5B5; }
        
        .section-content h3 {
            font-family: 'Montserrat', sans-serif;
            color: #8B4A4A;
            font-size: 18px;
            margin: 20px 0 10px 0;
            font-weight: 700;
        }
        
        .section-content p {
            margin-bottom: 15px;
            line-height: 1.7;
        }
        
        .section-content ul, .section-content ol {
            margin: 15px 0 15px 25px;
        }
        
        .section-content li {
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        .upload-item {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #D4A5A5;
        }
        
        .upload-item h4 {
            font-family: 'Montserrat', sans-serif;
            color: #8B4A4A;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .video-scene {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #2196f3;
        }
        
        .video-scene h4 {
            color: #1976d2;
            margin-bottom: 10px;
        }
        
        .camera-note {
            background: #f3e5f5;
            padding: 10px;
            border-radius: 6px;
            margin-top: 10px;
            font-style: italic;
            border-left: 3px solid #9c27b0;
        }
        
        .divider {
            text-align: center;
            margin: 40px 0;
            position: relative;
        }
        
        .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #E8D5D5, transparent);
        }
        
        .divider-icon {
            background: white;
            padding: 10px 20px;
            font-size: 24px;
            position: relative;
            z-index: 2;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        @media print {
            body {
                padding: 20px;
                font-size: 12px;
            }
            
            .header {
                padding: 20px;
            }
            
            .main-title {
                font-size: 36px;
            }
            
            .content-section {
                margin: 20px 0;
                padding: 20px;
            }
            
            .section-title {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="main-title">📣 July Content</h1>
        <p class="subtitle">Your Guide to Capturing Summer Magic</p>
    </div>
    
    <div class="mission-statement">
        <div class="mission-icon">🎯</div>
        <p class="mission-text">
            <strong>Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.</strong>
        </p>
        <div class="deadline-highlight">
            All content must be collected in <strong>June</strong> and submitted by <span class="deadline">June 30, 2025</span> for posting in July.
        </div>
    </div>

    <div class="toc">
        <h2>📋 Table of Contents</h2>
        <ol class="toc-list">
            <li class="toc-item">5 Epic Ways to Beat Summer Boredom - 📹 REEL | 5 VIDEOS</li>
            <li class="toc-item">4th of July Fireworks - 📸 PHOTO | 1 PHOTO</li>
            <li class="toc-item">Handstand Contest!!! - 📹 REEL | 1 VIDEO</li>
            <li class="toc-item">1 Photo The Secret to Confidence That Lasts Beyond Summer - 📸 PHOTO | 1 PHOTO</li>
            <li class="toc-item">1 Video "Can You Keep Up?" – Coach vs. Kid Race - 📹 REEL | 1 VIDEO</li>
            <li class="toc-item">4 Photo Riddle Week – Forward Roll Series - 📸 PHOTOS | 4 PHOTOS</li>
            <li class="toc-item">3 Photos "Not Sure What to Expect?" – We'll Show You- FREE TRIAL - 📸 PHOTOS | 3 PHOTOS</li>
            <li class="toc-item">3 Video Balance Reel - 📹 REEL | 3 VIDEOS</li>
        </ol>
    </div>

    <div class="format-structure">
        <h2>Content Format Structure</h2>
        <p>Every section follows this simple format:</p>
        <br>
        <p><strong>Title</strong></p>
        <p><strong>🎯 Post Type / # Amount / Visual:</strong> What the post is capturing emotionally/visually. This is a clear, direct description of what the viewer should see.</p>
        <p><strong>📌 Content Notes:</strong> Technical must-knows (length, edit-free, timing, etc.)</p>
        <p><strong>🎥 What to Upload:</strong> Clear list (Photo 1, Photo 2… OR Video 1, Video 2…). Each piece of content can include collapsible tips below if needed.</p>
        <p><strong>💡 Reminders/Tips (Optional):</strong></p>
    </div>

    <div class="divider">
        <span class="divider-icon">📱</span>
    </div>

    <h1 style="text-align: center; font-family: 'Montserrat', sans-serif; color: #8B4A4A; margin: 40px 0;">CONTENT TASKS</h1>

    <div class="content-section">
        <h2 class="section-title">5 Epic Ways to Beat Summer Boredom<span class="badge series-badge">REEL | 5 VIDEOS</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Five clips that visually show the variety and value of summer camp, highlighting fun for kids and demonstrating value to parents. Think energy, friendship, new skills, and adventure.</p>
            
            <h3>📌 Content Notes:</h3>
            <ul>
                <li>Record 5 clips total</li>
                <li>Each should be 15–20 seconds long</li>
                <li>You should only upload the final, trimmed clips—each one should show exactly what you want used in the final post.</li>
                <li>If you'd like to include multiple angles, effects, or cuts, that's encouraged—just edit them into a single 15–20 second clip before uploading.</li>
                <li>What you submit should be post-ready and require no further trimming or cleanup. I'll handle stitching the final clips together with transitions.</li>
            </ul>
            
            <h3>🎥 UPLOAD THESE 5 VIDEOS:</h3>
            
            <div class="upload-item">
                <h4>📹 Video 1: Group/Team Activity – High-Energy and Physical</h4>
                <ul>
                    <li>Kids feel: excited, energized—this place looks like so much fun!</li>
                    <li>Parents value: teamwork, physical activity</li>
                </ul>
            </div>
            
            <div class="upload-item">
                <h4>📹 Video 2: Learning & Progress</h4>
                <ul>
                    <li>Kids feel: eager to show off a new skill</li>
                    <li>Parents value: personal growth, progress</li>
                </ul>
            </div>
            
            <div class="upload-item">
                <h4>📹 Video 3: Friendship & Connection</h4>
                <ul>
                    <li>Kids feel: excited to have fun with friends or make new ones</li>
                    <li>Parents value: social growth, new experiences, lasting memories</li>
                </ul>
            </div>
            
            <div class="upload-item">
                <h4>📹 Video 4: Gym Personality & Playfulness</h4>
                <ul>
                    <li>Kids feel: how fun the gym is and how cool the coaches are</li>
                    <li>Parents value: playful, positive role models and a healthy environment</li>
                </ul>
            </div>
            
            <div class="upload-item">
                <h4>📹 Video 5: Happy & Worn Out</h4>
                <ul>
                    <li>Kids feel: fulfilled, can't wait to come back tomorrow</li>
                    <li>Parents value: a full, active, happy day</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">4th of July Fireworks<span class="badge photo-badge">PHOTO | 1 PHOTO</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Kids caught mid-action, like jumping or cheering, at the peak moment-think fireworks.</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Focus on capturing one clear, bright image that highlights excitement at its peak. Ensure the photo is well-lit and crisp no blur.</p>
            
            <h3>📷 UPLOAD THIS 1 PHOTO:</h3>
            <div class="upload-item">
                <h4>📸 One group action shot</h4>
                <p>Example: Throwing pit cubs.jumping into pit</p>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">Handstand Contest!!!<span class="badge video-badge">REEL | 1 VIDEO</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Organize a classic handstand contest. Can be walking or no walking! Include kids of any and all levels in your gym—the more mix, the better! Kids, coaches, or both. Get creative with locations: beam handstands, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! Catch the fun energy and team spirit.</p>
            
            <h3>📌 Content Notes:</h3>
            <ul>
                <li>Submit one final video, 20–30 seconds total, from start to finish that captures a classic handstand contest.</li>
                <li>It's encouraged to include multiple clips, angles, or views—just make sure they are put together before uploading so it plays as one smooth video.</li>
                <li>If you're not sure how to do that, just let me know—I can help.</li>
            </ul>
            
            <h3>🎥 UPLOAD THIS 1 VIDEO:</h3>
            <div class="upload-item">
                <h4>📹 One 20–30 second continuous video capturing the full contest</h4>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">1 Photo The Secret to Confidence That Lasts Beyond Summer<span class="badge photo-badge">PHOTO | 1 PHOTO</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Core Visual: A pure "I-did-it!" face!</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Choose one powerful, clear image that radiates confidence. It should be that photo that instantly makes you smile. Highlight the child's face and emotion in action.</p>
            
            <h3>📷 UPLOAD THIS 1 PHOTO:</h3>
            <div class="upload-item">
                <h4>📸 One incredible photo of a child achieving something big (rope climb, ninja course, new skill, etc.)</h4>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">1 Video "Can You Keep Up?" – Coach vs. Kid Race<span class="badge video-badge">REEL | 1 VIDEO</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Coaches participating in obstacle course/race activities with kids—showing coaches actually doing camp games and challenges alongside campers.</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Film one continuous race from start ("Ready, Set, Go!") to final reactions. Capture both action and fun! Focus on the playful interaction between coaches and kids. can be one or multiple shots angles</p>
            
            <h3>🎥 UPLOAD THIS 1 VIDEO:</h3>
            <div class="upload-item">
                <h4>📹 One full video: Start with "Ready, Set, Go!" → End after reactions</h4>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">4 Photo Riddle Week – Forward Roll Series<span class="badge series-badge">PHOTOS | 4 PHOTOS</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Preschoolers in motion—showing curiosity, movement, and joyful progress through a forward roll.</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Use one child to show all 4 steps clearly. You should clearly see each phase of the roll - full shot - clear no blur concept.</p>
            
            <h3>📷 UPLOAD THESE 4 PHOTOS:</h3>
            <div class="upload-item">
                <h4>📸 4 photos showing each stage of a forward roll:</h4>
                <ol>
                    <li><strong>📸 Photo 1:</strong> Hands Up High</li>
                    <li><strong>📸 Photo 2:</strong> Hands Down Low</li>
                    <li><strong>📸 Photo 3:</strong> Look at Your Belly</li>
                    <li><strong>📸 Photo 4:</strong> Over You Go – TADAA!</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">3 Photos "Not Sure What to Expect?" – We'll Show You- FREE TRIAL<span class="badge series-badge">PHOTOS | 3 PHOTOS</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>A high-energy class in action—coaches involved, kids smiling, and real learning happening.</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Grab those perfect moments where the energy and fun are obvious—think high-fives, big smiles, and kids in the middle of the action. No stiff poses, just real, awesome moments. Goal is to encourage people to try free trial classes and show off your gym equipment and fun atmosphere.</p>
            
            <h3>📷 UPLOAD THESE 3 PHOTOS:</h3>
            <div class="upload-item">
                <ul>
                    <li><strong>📸 Photo 1:</strong> A group action shot of a class in action—kids playing together, smiling, and having a blast.</li>
                    <li><strong>📸 Photo 2:</strong> A coach connecting with kids in class—think high-fives, spotting a skill, or a teaching moment.</li>
                    <li><strong>📸 Photo 3:</strong> Anything that makes you smile and highlights your gym's personality—use equipment, displays, or decorations that show off what makes your gym unique.</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="divider">
        <span class="divider-icon">🚀</span>
    </div>

    <div class="content-section">
        <h2 class="section-title">3 Video Balance Reel<span class="badge series-badge">REEL | 3 VIDEOS</span></h2>
        <div class="section-content">
            <h3>🎯 Post Visual:</h3>
            <p>Show off balance in a fun, creative way using three short clips. Capture movement with control, cool angles, and a confident finish—something that feels interactive and visually interesting. Give parents a view they don't usually get to see.</p>
            
            <h3>📌 Content Notes:</h3>
            <p>Use smooth zoom transitions for dramatic effect. Capture different angles for variety. Focus on precision and control in movements.</p>
            
            <h3>🎥 UPLOAD THESE 3 VIDEOS:</h3>
            
            <div class="video-scene">
                <h4>📹 Video 1: Walking on Beam</h4>
                <p><strong>🎬 Scene 1: Walking on Beam</strong></p>
                <p>Start with a straight-down-the-beam view. Gymnast walks slowly toward the camera. This is perspective from the end of the beam so they see what doing skills on a 4 inch beam really looks like.</p>
                <div class="camera-note">
                    <strong>Camera:</strong> Start wide → zoom in closer towards their feet as they balance
                </div>
            </div>
            
            <div class="video-scene">
                <h4>📹 Video 2: Skill – Zoom to Movement</h4>
                <p><strong>🎬 Scene 2: Skill – Zoom to Movement</strong></p>
                <p>Switch to a side view of the gymnast on beam. Film one dynamic beam skill of the athlete's choice—anything that shows action and control.</p>
                <div class="camera-note">
                    <strong>Camera:</strong> Begin wide → zoom in on the movement to highlight precision.
                </div>
            </div>
            
            <div class="video-scene">
                <h4>📹 Video 3: Dismount – Zoom to Landing</h4>
                <p><strong>🎬 Scene 3: Dismount – Zoom to Landing</strong></p>
                <p>Film from a new angle (diagonal or front corner preferred). Show the entire dismount, from prep to stick + salute.</p>
                <div class="camera-note">
                    <strong>Camera:</strong> Full shot → zoom in on the landing or arms lifting in salute.
                </div>
            </div>
        </div>
    </div>

    <script>
        // Auto-print when the page loads
        window.onload = function() {
            setTimeout(function() {
                window.print();
                window.close();
            }, 1000);
        };
    </script>
</body>
</html>`;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
};