import React, { lazy, ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGlobalAppState } from '../../store/app-context';

const UserInformation = lazy(() => import('./pages/UserInformation/UserInformation'));

const Profile: React.FC = () => {
  const { user } = useGlobalAppState();
  const WithRedirect = ({ children }: { children: ReactNode }) => {
    if (!user) {
      window.location.href = '/b';
      return <></>;
    }
    return <>{children}</>;
  };

  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <WithRedirect>
              <UserInformation />
            </WithRedirect>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Profile;
