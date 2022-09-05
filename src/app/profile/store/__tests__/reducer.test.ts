import { OauthError } from '../../../../domain/error';
import { ProfileActions, profileReducer, profileState } from '../reducer';

describe('login reducer test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have fetching true', () => {
    const state = { ...profileState };
    const finalState = profileReducer(state, { type: ProfileActions.ClearData });

    expect(finalState).toMatchSnapshot();
    expect(finalState).toEqual(state);
  });

  it('should return error', () => {
    try {
      const state = { ...profileState };
      profileReducer(state, { type: 'test' as ProfileActions });
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect((error as OauthError).message).toBe(`Unknown type: test`);
    }
  });
});
