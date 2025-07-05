import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

console.log('main.jsx: Starting application...');

// Add error handling
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

try {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Failed to render app:', error);
  // Fallback rendering
  root.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Loading Error</h1><p>There was an error loading the application. Check the console for details.</p></div>';
}
