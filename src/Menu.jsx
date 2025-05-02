// src/components/Menu.jsx
import React from 'react';

function Menu({ labs, onSelect }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {labs.map(lab => (
        <li key={lab.id}>
          <button onClick={() => onSelect(lab)}>{lab.title}</button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;