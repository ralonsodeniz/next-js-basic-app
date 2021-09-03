import styled from 'styled-components';
import { mediaQueries } from '@Styles/helpers/media-queries';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 10px;
  ${mediaQueries.portrait} {
    padding: 0 10%;
  }
`;
export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  ${mediaQueries.landscape} {
    font-size: 2rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-left: 1rem;
  ${mediaQueries.portrait} {
    margin-left: 3rem;
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fcb8d2;
    &:hover,
    &:active,
    .active {
      color: white;
    }
    ${mediaQueries.landscape} {
      font-size: 1.5rem;
    }
  }
`;
