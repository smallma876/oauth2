import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './app/login/pages/Home/Home';
import { LoginProvider } from './app/login/store/login-context';
import Profile from './app/profile/Profile';
import { useGlobalAppState } from './store/app-context';

function App() {
  const { user } = useGlobalAppState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
