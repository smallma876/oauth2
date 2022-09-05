import { mockAlbum } from '../mocks/profile-proxy';
import { profileProxy } from '../profile-proxy';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockAlbum),
  }),
) as jest.Mock;

describe('profile-proxy', () => {
  it('should return mock', async () => {
    const result = await profileProxy.getAlbums('xBCD');
    expect(mockAlbum).toEqual(result);
  });
});
