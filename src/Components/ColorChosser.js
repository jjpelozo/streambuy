import React, { useState } from 'react';
import "./ColorChosser.css"

const ColorChooser = ({ availableColors, onSelectedColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const availableColorsChosse = ["red", "blue", "orange"];


  const setColor = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="color-chooser">
      {availableColorsChosse.map((color) => (
        <div
          className={selectedColor === color ? 'color-item color-item-selected' : 'color-item'}
          key={color}
          onClick={() => setColor(color)}
          style={{ backgroundColor: color }}
          role="presentation"
        />
      ))}
    </div>
  );
};


export default ColorChooser;