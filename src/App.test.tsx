import { render, RenderResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { OauthError } from './domain/error';
import { TokenInformation } from './proxy/mocks/token-information';
import { GlobalAppProvider, useGlobalAppDispatch, useGlobalAppState } from './store/app-context';
import { AppState } from './store/reducer';

interface TestComponentInterface {
  testStateProps?: Partial<AppState>;
}

const renderApp = async (initialPage: string, { testStateProps }: TestComponentInterface = {}) => {
  let container = {} as RenderResult;

  await act(async () => {
    container = render(
      <GlobalAppProvider testStateProps={testStateProps}>
        <MemoryRouter initialEntries={[initialPage]}>
          <App />
        </MemoryRouter>
      </GlobalAppProvider>,
    );
  });

  return container;
};

describe('app test', () => {
  it('should throw error that you must use useAppState inside AppStateContext', () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();

    const TestComponent = () => {
      useGlobalAppState();

      return <App />;
    };

    try {
      render(<TestComponent />);
    } catch (error) {
      expect((error as OauthError).message).toBe('useGlobalAppState must be used within AppStateContext');
    }

    console.error = originalConsoleError;
  });

  it('should throw error that you must use useGlobalAppDispatch inside AppDispatchContext', () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();

    const TestComponent = () => {
      useGlobalAppDispatch();

      return <App />;
    };

    try {
      render(<TestComponent />);
    } catch (error) {
      expect((error as OauthError).message).toBe('useGlobalAppDispatch must be used within a AppDispatchContext');
    }

    console.error = originalConsoleError;
  });

  it('render app', async () => {
    const { container } = await renderApp('/b');
    expect(container).toMatchSnapshot();
  });

  it('should render app with user', async () => {
    const { container } = await renderApp('/b', {
      testStateProps: {
        user: TokenInformation,
      },
    });
    expect(container).toMatchSnapshot();
  });
});
