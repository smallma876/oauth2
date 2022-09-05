import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { DispatchLogin, loginReducer, loginState, LoginState } from './reducer';

interface LoginProviderInterface {
  children: ReactNode;
  extraState?: Partial<LoginState>;
}

const LoginStateContext = createContext<LoginState | undefined>(undefined);
const LoginDispatchContext = createContext<DispatchLogin | undefined>(undefined);

const LoginProvider: FC<LoginProviderInterface> = ({ children, extraState }: LoginProviderInterface) => {
  const [state, dispatch] = useReducer(loginReducer, {
    ...loginState,
    ...extraState,
  });

  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>{children}</LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};

/* const useLoginState = (): LoginState => {
  const context = React.useContext(LoginStateContext) as LoginState;

  if (context === undefined) {
    throw new Error('useLoginState must be used within a LoginStateContext');
  }

  return context;
};

const useLoginDispatch = (): DispatchLogin => {
  const context = React.useContext(LoginDispatchContext) as DispatchLogin;

  if (context === undefined) {
    throw new Error(
      'useLoginDispatch must be used within a LoginDispatchContext',
    );
  }

  return context;
}; */

export { LoginProvider /* useLoginDispatch, useLoginState */ };
