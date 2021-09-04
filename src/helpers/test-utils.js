import * as nextRouter from 'next/router';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@material-ui/core';
import muiTheme from '@Styles/muiTheme';

const mockRouter = (router) => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    asPath: router.route,
    prefetch: async () => {},
    push: (path) => window.history.pushState(null, null, path),
    ...router,
  }));
};

const customRender = (ui, { customEntries, ...options } = {}) => {
  const AllTheProviders = ({ children }) => (
    <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render, userEvent, mockRouter };
