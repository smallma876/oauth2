import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useGlobalAppDispatch } from '../../../../store/app-context';
import { AppActions } from '../../../../store/reducer';
import { LoginToken } from '../../domain/login-token';

const Home: React.FC = () => {
  const appDispatch = useGlobalAppDispatch();
  const handleCallbackResponse = (response: any) => {
    appDispatch({ type: AppActions.SetUser, payload: jwtDecode(response.credential) });
    appDispatch({ type: AppActions.SetToken, payload: response.credential });
  };

  useEffect(() => {
    if ((window as any).google) {
      (window as any).google.accounts.id.initialize({
        client_id: '374760273133-4eghe15hb1ek840nmnjotpvtelv2fq11.apps.googleusercontent.com',
        callback: handleCallbackResponse,
      });

      (window as any).google.accounts.id.renderButton(document.getElementById('signInDiv'), {
        theme: 'outline',
        size: 'large',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>OAUTH 2.0</div>
      <div>Login with: </div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default Home;
