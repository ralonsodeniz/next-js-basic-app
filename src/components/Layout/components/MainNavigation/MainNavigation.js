import Link from 'next/link';
import { List, Item, Logo, Header } from './MainNavigation.styled';

const MainNavigation = () => (
  <Header>
    <Logo>React Meetups</Logo>
    <nav>
      <List>
        <Item>
          <Link href="/">All Meetups</Link>
        </Item>
        <Item>
          <Link href="/new-meetup">Add New Meetup</Link>
        </Item>
      </List>
    </nav>
  </Header>
);

export default MainNavigation;
