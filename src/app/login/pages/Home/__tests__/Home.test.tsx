import { MemoryRouter } from 'react-router-dom';
import Login from '../../../Login';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('home test', () => {
  it('render home', async () => {
    const { container } = await renderComponent({
      Component: (
        <MemoryRouter initialEntries={['/']}>
          <Login />
        </MemoryRouter>
      ),
    });
    expect(container).toMatchSnapshot();
  });
});
