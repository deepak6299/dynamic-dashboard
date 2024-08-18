// src/components/AddWidgetModal.js

import React, { useState } from 'react';

const AddWidgetModal = ({ onClose, onAddWidget, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    onAddWidget(selectedCategory, {
      id: `${selectedCategory}_${widgetName}`,
      name: widgetName,
      type: 'text',
      data: widgetText,
    });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Widget</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <textarea
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button onClick={handleAddWidget}>Add Widget</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddWidgetModal;
