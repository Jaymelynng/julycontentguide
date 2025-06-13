import React from 'react';
import { EditableContent } from '../EditableContent';

export function TechnicalSection() {
  return (
    <div>
      <EditableContent>
        <h1>Technical Standards</h1>
      </EditableContent>

      <div className="requirements">
        <EditableContent>
          <h3>📱 Video & Photo Specs</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li><b>Photos:</b> High resolution, well-lit</li>
            <li><b>Format:</b> Vertical preferred for social (landscape also acceptable)</li>
            <li><b>Quality:</b> Clear, steady, in focus</li>
            <li><b>Composition:</b> Full body in frame</li>
          </ul>
        </EditableContent>
      </div>

      <div className="requirements">
        <EditableContent>
          <h3>Before Submitting - Check These:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Is the technique clean and safe?</li>
            <li>Is the angle respectful and not awkward?</li>
            <li>Is the moment authentic (not staged for the camera)?</li>
            <li>Is the background good?</li>
            <li>Is sound good?</li>
            <li>Is the lighting solid?</li>
          </ul>
        </EditableContent>
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