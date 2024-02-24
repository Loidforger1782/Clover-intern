// src/App.jsx
import React from 'react';
import './App.css';
import CurrencyConverterApp from './CurrencyConverterApp';

const App = () => {
  return (
    <div className="app">
      <CurrencyConverterApp key={1} />
      <CurrencyConverterApp key={2} />
      <CurrencyConverterApp key={3} />
    </div>
  );
};

export default App;
