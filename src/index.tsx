import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

const hello = `${import.meta.env.VITE_HELLO} frontend`;

const App = () => <div>{hello}</div>;
const container = document.getElementById('root');

if (container) {
  document.body.appendChild(container);

  const root = createRoot(container);

  root.render(<App />);
} else {
  console.error('Root element #root not found');
}
