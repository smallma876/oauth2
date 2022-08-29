import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../Login';

describe('home test', () => {
  it('render home', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Login />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
