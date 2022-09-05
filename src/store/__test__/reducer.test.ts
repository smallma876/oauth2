import { OauthError } from '../../domain/error';
import { TokenInformation } from '../../proxy/mocks/token-information';
import { AppActions, appReducer, initialState } from '../reducer';

describe('reducer test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have fetching true', () => {
    const state = { ...initialState, isFetching: true, pendingFetches: 1 };
    const finalState = appReducer(initialState, { type: AppActions.IsFetching });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should have fetching false', () => {
    const state = { ...initialState, isFetching: false, pendingFetches: -1 };
    const finalState = appReducer(initialState, { type: AppActions.FinishFetching });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should have session expired true', () => {
    const state = { ...initialState, sessionExpired: true };
    const finalState = appReducer(state, { type: AppActions.SessionExpired });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should set user', () => {
    const state = { ...initialState, user: TokenInformation };
    const finalState = appReducer(initialState, { type: AppActions.SetUser, payload: TokenInformation });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should set token', () => {
    const state = { ...initialState, token: 'XaBCX' };
    const finalState = appReducer(initialState, { type: AppActions.SetToken, payload: 'XaBCX' });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should return error', () => {
    try {
      appReducer(initialState, { type: 'test' as AppActions });
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect((error as OauthError).message).toBe(`Unknown type: test`);
    }
  });
});
