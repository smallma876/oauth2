import { act, render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { GlobalAppProvider } from '../../../store/app-context';
import { AppState, DispatchApp } from '../../../store/reducer';
import * as context from '../store/profile-context';
import { ProfileState } from '../store/reducer';

interface RenderComponentInterface {
  Component: ReactElement;
  stateProps?: Partial<AppState>;
  extraState?: Partial<ProfileState>;
  dispatch?: DispatchApp;
}

export const renderComponent = async (renderComponentConfig: RenderComponentInterface) => {
  let component = {} as RenderResult;
  const { stateProps, dispatch, Component, extraState = {} } = renderComponentConfig;

  await act(async () => {
    component = render(
      <GlobalAppProvider testStateProps={stateProps} testDispatch={dispatch}>
        <context.ProfileProvider extraState={extraState}>{Component}</context.ProfileProvider>
      </GlobalAppProvider>,
    );
  });

  return component;
};
