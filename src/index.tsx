import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalAppProvider } from './store/app-context';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router basename="/b">
      <Suspense fallback={<div>...Cargando</div>}>
        <GlobalAppProvider>
          <App />
        </GlobalAppProvider>
      </Suspense>
    </Router>
  </React.StrictMode>,
);
