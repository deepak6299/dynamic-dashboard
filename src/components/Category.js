// src/components/Category.js

import React from 'react';
import Widget from './Widget';

const Category = ({ category, onRemoveWidget }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={(widgetId) => onRemoveWidget(category.id, widgetId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
