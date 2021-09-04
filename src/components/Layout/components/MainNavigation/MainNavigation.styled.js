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

export const Item = styled.li`
  text-align: center;
  max-width: 5rem;
  position: relative;
  ${mediaQueries.portrait} {
    max-width: none;
  }
  ${mediaQueries.desktopDevice} {
    &:after {
      content: '';
      position: absolute;
      width: 0;
      bottom: -5px;
      left: 0;
      height: 2px;
      background-color: #fcb8d2;
      pointer-events: none;
      transition: background-color 0.4s ease-in-out, width 0.4s ease-in-out;
    }
    &:hover :after {
      width: ${({ width }) => `${width}px` || '100%'};
      background-color: white;
    }
  }
  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fcb8d2;
    transition: color 0.4s ease-in-out;
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

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  ${Item} + ${Item} {
    margin-left: 1rem;
    ${mediaQueries.portrait} {
      margin-left: 3rem;
    }
  }
`;
