import ReactDOM from 'react-dom/client';

import ErrorBoundary from './components/Error/ErrorBoundary';
import { BookProvider } from './providers/BookProvider';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <BookProvider>
      <App/>
    </BookProvider>
  </ErrorBoundary>
);

