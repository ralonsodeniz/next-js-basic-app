import Link from 'next/link';
import { List, Item, Logo, Header } from './MainNavigation.styled';
import { paths } from '@Enums/paths';
import { literals } from '@Enums/literals';

const MainNavigation = () => (
  <Header>
    <Logo>{literals.navBar.LOGO}</Logo>
    <nav>
      <List>
        <Item>
          <Link href={paths.HOME}>{literals.navBar.HOME}</Link>
        </Item>
        <Item>
          <Link href={paths.NEW_MEETUP}>{literals.navBar.NEW_MEETUP}</Link>
        </Item>
      </List>
    </nav>
  </Header>
);

export default MainNavigation;
