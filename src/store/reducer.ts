import produce, { Draft } from 'immer';
import { Dispatch } from 'react';
import { LoginToken } from '../app/login/domain/login-token';
import { DispatchObject } from '../domain/dispatch';

export type DispatchApp = Dispatch<DispatchObject<AppActions>>;

export enum AppActions {
  IsFetching = 'IS_FETCHING',
  FinishFetching = 'FINISHED_FETCHING',
  ErrorFetching = 'ERROR_FETCHING',
  SessionExpired = 'SESSION_EXPIRED',
  ShowLoadingBeforeNavigating = 'SHOW_LOADING_BEFORE_NAVIGATING',
  ClearError = 'CLEAR_ERROR',
  ClearData = 'CLEAR_DATA',
  SetUser = 'SET_USER',
  SetToken = 'SET_TOKEN',
}

export interface AppState {
  isFetching: boolean;
  pendingFetches: number;
  sessionExpired: boolean;
  showLoadingBeforeNavigating: boolean;
  user: LoginToken | null;
  token: string;
}

export const initialState: AppState = {
  isFetching: false,
  pendingFetches: 0,
  sessionExpired: false,
  showLoadingBeforeNavigating: false,
  user: null,
  token: '',
};

export const appReducer = produce((draft: Draft<AppState>, { type, payload }: DispatchObject<AppActions>) => {
  switch (type) {
    case AppActions.IsFetching:
      draft.pendingFetches += 1;
      draft.isFetching = true;
      break;
    case AppActions.FinishFetching:
      draft.pendingFetches -= 1;
      draft.isFetching = false;
      break;
    case AppActions.SessionExpired:
      draft.sessionExpired = true;
      break;
    case AppActions.SetUser:
      draft.user = payload as LoginToken;
      break;
    case AppActions.SetToken:
      draft.token = payload as string;
      break;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
});
