import { OauthError } from '../../../../domain/error';
import { LoginActions, loginReducer, loginState } from '../reducer';

describe('login reducer test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have fetching true', () => {
    const state = { ...loginState };
    const finalState = loginReducer(state, { type: LoginActions.ClearData });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should return error', () => {
    try {
      const state = { ...loginState };
      loginReducer(state, { type: 'test' as LoginActions });
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect((error as OauthError).message).toBe(`Unknown type: test`);
    }
  });
});
