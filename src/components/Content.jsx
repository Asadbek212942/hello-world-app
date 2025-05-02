// src/components/Content.jsx
import React from 'react';

function Content({ selectedLab }) {
  if (!selectedLab) {
    return <p>Select a lab from the menu.</p>;
  }

  return (
    <div>
      <h2>{selectedLab.title}</h2>
      <p>{selectedLab.content}</p>
    </div>
  );
}

export default Content;