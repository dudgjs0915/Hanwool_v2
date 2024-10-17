import React from 'react';
import ReactDOM from 'react-dom/client';
import AnalysisCompany from './landingpage/AnalysisCompany';
import reportWebVitals from './reportWebVitals';
import index from './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnalysisCompany />
  </React.StrictMode>
);

reportWebVitals();