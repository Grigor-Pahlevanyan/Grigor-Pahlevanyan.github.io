import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('React app starting...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found!');
    document.body.innerHTML = '<div style="color: white; background: red; padding: 20px;">Error: Root element not found!</div>';
  } else {
    console.log('Root element found, rendering React app...');
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log('React app rendered successfully!');
  }
} catch (error) {
  console.error('Error rendering React app:', error);
  document.body.innerHTML = `<div style="color: white; background: red; padding: 20px;">Error: ${error.message}</div>`;
}
