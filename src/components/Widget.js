// src/components/Widget.js

import React from 'react';

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{widget.name}</h3>
        <button onClick={() => onRemove(widget.id)}>×</button>
      </div>
      <div className="widget-content">
        {/* Render content based on widget type */}
        {widget.type === 'graph' && <div>{widget.data.connected} / {widget.data.not_connected}</div>}
        {widget.type === 'chart' && (
          <ul>
            <li>Failed: {widget.data.failed}</li>
            <li>Warning: {widget.data.warning}</li>
            <li>Not Available: {widget.data.not_available}</li>
            <li>Passed: {widget.data.passed}</li>
          </ul>
        )}
        {widget.type === 'text' && <p>{widget.data}</p>}
      </div>
    </div>
  );
};

export default Widget;
