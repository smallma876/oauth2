import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './app/login/pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
