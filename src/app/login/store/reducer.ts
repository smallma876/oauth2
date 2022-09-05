import produce, { Draft } from 'immer';
import { Dispatch } from 'react';
import { DispatchObject } from '../../../domain/dispatch';

export type DispatchLogin = Dispatch<DispatchObject<LoginActions>>;

export enum LoginActions {
  ClearData = 'CLEAR_DATA',
}

export interface LoginState {}

export const loginState: LoginState = {};

export const loginReducer = produce((draft: Draft<LoginState>, { type, payload }: DispatchObject<LoginActions>) => {
  switch (type) {
    case LoginActions.ClearData:
      break;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
});
