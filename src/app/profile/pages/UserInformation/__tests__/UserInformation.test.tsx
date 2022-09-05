import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TokenInformation } from '../../../../../proxy/mocks/token-information';
import Profile from '../../../Profile';
import { renderComponent } from '../../../test-utils/renderComponent';
import UserInformation from '../UserInformation';

describe('UserInformation test', () => {
  it('render user information', async () => {
    const { container } = await renderComponent({
      stateProps: {
        user: TokenInformation,
      },
      Component: (
        <MemoryRouter initialEntries={['/']}>
          <Profile />
        </MemoryRouter>
      ),
    });
    expect(container).toMatchSnapshot();
  });

  it('should redirect to login', async () => {
    const { container } = await renderComponent({
      stateProps: {
        user: null,
      },
      Component: (
        <MemoryRouter initialEntries={['/']}>
          <Profile />
        </MemoryRouter>
      ),
    });
    expect(container).toMatchSnapshot();
  });
});
