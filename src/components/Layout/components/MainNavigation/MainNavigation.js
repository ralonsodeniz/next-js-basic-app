import { useCallback, useState } from 'react';
import Link from 'next/link';
import { List, Item, Logo, Header } from './MainNavigation.styled';
import { paths } from '@Enums/paths';
import { literals } from '@Enums/literals';

const MainNavigation = () => {
  const [allMeetupsWidth, setAllMeetupsWidth] = useState(0);
  const [newMeetupWidth, setNewMeetupWidth] = useState(0);
  const getAllMeetupsWidth = useCallback((node) => {
    if (node) {
      const { width } = node.getBoundingClientRect();
      setAllMeetupsWidth(width);
    }
  }, []);
  const getNewMeetupWidth = useCallback((node) => {
    if (node) {
      const { width } = node.getBoundingClientRect();
      setNewMeetupWidth(width);
    }
  }, []);

  return (
    <Header>
      <Logo>{literals.navBar.LOGO}</Logo>
      <nav>
        <List>
          <Item ref={getAllMeetupsWidth} width={allMeetupsWidth}>
            <Link href={paths.HOME}>{literals.navBar.HOME}</Link>
          </Item>
          <Item ref={getNewMeetupWidth} width={newMeetupWidth}>
            <Link href={paths.NEW_MEETUP}>{literals.navBar.NEW_MEETUP}</Link>
          </Item>
        </List>
      </nav>
    </Header>
  );
};

export default MainNavigation;
