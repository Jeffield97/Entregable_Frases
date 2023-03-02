import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <h2>Frases probervios</h2>
      <Button></Button>
      <Card></Card>
      <h3>Abraham Lincoln</h3>
    </App>
  </React.StrictMode>,
);
