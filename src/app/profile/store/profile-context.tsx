import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { DispatchProfile, profileReducer, profileState, ProfileState } from './reducer';

interface ProfileProviderInterface {
  children: ReactNode;
  extraState?: Partial<ProfileState>;
}

const ProfileStateContext = createContext<ProfileState | undefined>(undefined);
const ProfileDispatchContext = createContext<DispatchProfile | undefined>(undefined);

const ProfileProvider: FC<ProfileProviderInterface> = ({ children, extraState }: ProfileProviderInterface) => {
  const [state, dispatch] = useReducer(profileReducer, {
    ...profileState,
    ...extraState,
  });

  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileDispatchContext.Provider value={dispatch}>{children}</ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  );
};

/* const useProfileState = (): ProfileState => {
  const context = React.useContext(ProfileStateContext) as ProfileState;

  if (context === undefined) {
    throw new Error('useProfileState must be used within a ProfileStateContext');
  }

  return context;
};

const useProfileDispatch = (): DispatchProfile => {
  const context = React.useContext(ProfileDispatchContext) as DispatchProfile;

  if (context === undefined) {
    throw new Error('useProfileDispatch must be used within a ProfileDispatchContext');
  }

  return context;
}; */

export { ProfileProvider /* useProfileDispatch, useProfileState */ };
