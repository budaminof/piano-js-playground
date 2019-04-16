
import React from 'react';
import './musicLog.scss';

const MusicLog = ({ notes }) => (
  <div className="music-log">
    {notes.map((note, index) => <span key={index}>{note}</span>)}
  </div>
)

export default MusicLog;