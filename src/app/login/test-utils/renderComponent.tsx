import { act, render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { GlobalAppProvider } from '../../../store/app-context';
import { AppState, DispatchApp } from '../../../store/reducer';
import { LoginState } from '../store/reducer';
import * as context from './../store/login-context';

interface RenderComponentInterface {
  Component: ReactElement;
  stateProps?: Partial<AppState>;
  extraState?: Partial<LoginState>;
  dispatch?: DispatchApp;
}

export const renderComponent = async (renderComponentConfig: RenderComponentInterface) => {
  let component = {} as RenderResult;
  const { stateProps, dispatch, Component, extraState = {} } = renderComponentConfig;

  await act(async () => {
    component = render(
      <GlobalAppProvider testStateProps={stateProps} testDispatch={dispatch}>
        <context.LoginProvider extraState={extraState}>{Component}</context.LoginProvider>
      </GlobalAppProvider>,
    );
  });

  return component;
};
