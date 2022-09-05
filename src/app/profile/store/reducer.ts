import produce, { Draft } from 'immer';
import { Dispatch } from 'react';
import { DispatchObject } from '../../../domain/dispatch';

export type DispatchProfile = Dispatch<DispatchObject<ProfileActions>>;

export enum ProfileActions {
  ClearData = 'CLEAR_DATA',
}

export interface ProfileState {}

export const profileState: ProfileState = {};

export const profileReducer = produce(
  (draft: Draft<ProfileState>, { type, payload }: DispatchObject<ProfileActions>) => {
    switch (type) {
      case ProfileActions.ClearData:
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  },
);
