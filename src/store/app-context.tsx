import { castDraft } from 'immer';
import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { appReducer, AppState, DispatchApp, initialState } from './reducer';

export interface AppProviderInterface {
  children: ReactNode;
  testStateProps?: Partial<AppState>;
  testDispatch?: DispatchApp;
}

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<DispatchApp | undefined>(undefined);

const GlobalAppProvider: FC<AppProviderInterface> = ({
  children,
  testStateProps,
  testDispatch,
}: AppProviderInterface) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={castDraft({ ...state, ...testStateProps })}>
      <AppDispatchContext.Provider value={testDispatch || dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useGlobalAppState = (): AppState => {
  const context = React.useContext(AppStateContext) as AppState;

  if (context === undefined) {
    throw new Error('useGlobalAppState must be used within AppStateContext');
  }

  return context;
};

const useGlobalAppDispatch = (): DispatchApp => {
  const context = React.useContext(AppDispatchContext) as DispatchApp;

  if (context === undefined) {
    throw new Error('useGlobalAppDispatch must be used within a AppDispatchContext');
  }

  return context;
};

export { GlobalAppProvider, useGlobalAppState, useGlobalAppDispatch };
