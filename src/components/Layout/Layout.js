import MainNavigation from './components/MainNavigation';
import { Main } from './Layout.styled';

export const Layout = ({ children }) => (
  <>
    <MainNavigation />
    <Main>{children}</Main>
  </>
);

export default Layout;
