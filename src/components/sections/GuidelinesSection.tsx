import React from 'react';
import { EditableContent } from '../EditableContent';

export function GuidelinesSection() {
  return (
    <div>
      <EditableContent>
        <h1>Content Guidelines</h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          <b>Your Role:</b>
          <ul>
            <li>Represent the gym with professionalism and positivity</li>
            <li>Capture high-quality, on-brand content (photos and videos)</li>
            <li>Follow technique, safety, and privacy rules</li>
            <li>Use the simplified file naming format</li>
            <li>Communicate questions — we're here to help!</li>
          </ul>
        </div>
      </EditableContent>

      <div className="do-dont-grid">
        <div className="do-section">
          <EditableContent>
            <h4>Do This - What Makes Great Content</h4>
          </EditableContent>
          <EditableContent>
            <ul>
              <li>Kids learning and making genuine progress</li>
              <li>Authentic smiles and breakthrough moments</li>
              <li>Proper technique and safe skill execution</li>
              <li>Clean, organized gym environment</li>
              <li>Coaches actively teaching and encouraging</li>
              <li>Natural interactions and teamwork</li>
              <li>Good form and clean space</li>
              <li>Natural joy and positive coach energy</li>
              <li>Safe, appropriate filming</li>
            </ul>
          </EditableContent>
        </div>
        <div className="dont-section">
          <EditableContent>
            <h4>Not This - Red Flags</h4>
          </EditableContent>
          <EditableContent>
            <ul>
              <li>Skills with incorrect technique (arched backs, bent knees, heads turned wrong way)</li>
              <li>Inappropriate angles or revealing positions</li>
              <li>No low shots, wide straddles, nothing awkward</li>
              <li>Clothing malfunctions or exposure</li>
              <li>Blurry, dark, or poor quality footage</li>
              <li>Cluttered backgrounds with equipment out of place</li>
              <li>Kids who are upset, crying, or frustrated</li>
              <li>Forced or awkward moments</li>
              <li>Distracted or unengaged coaching</li>
            </ul>
          </EditableContent>
        </div>
      </div>

      <div className="golden-rule">
        <EditableContent>
          <h3>💡 The Golden Rule</h3>
        </EditableContent>
        <EditableContent>
          <p>Before hitting record, ask yourself: <b>"Would I want this shared if it were my child?"</b> If yes—film it! If you hesitate, don't.</p>
        </EditableContent>
      </div>
    </div>
  );
}