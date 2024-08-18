// src/App.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from './redux/dashboardSlice';
import Header from './components/Header';
import Category from './components/Category';
import AddWidgetModal from './components/AddWidgetModal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId, widget) => {
    dispatch(addWidget({ categoryId, widget }));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  return (
    <div className="app">
      <Header onAddWidget={() => setModalOpen(true)} />
      <div className="dashboard">
        {dashboard.categories.map(category => (
          <Category
            key={category.id}
            category={category}
            onRemoveWidget={handleRemoveWidget}
          />
        ))}
      </div>
      {isModalOpen && (
        <AddWidgetModal
          onClose={() => setModalOpen(false)}
          onAddWidget={handleAddWidget}
          categories={dashboard.categories}
        />
      )}
    </div>
  );
};

export default App;
