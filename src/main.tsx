import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);