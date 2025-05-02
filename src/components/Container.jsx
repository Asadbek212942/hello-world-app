// src/components/Container.jsx
import React from 'react';

function Container({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
}

export default Container;