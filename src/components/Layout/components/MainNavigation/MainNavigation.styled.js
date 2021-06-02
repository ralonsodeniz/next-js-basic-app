import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`;
export const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

export const Item = styled.li`
  margin-left: 3rem;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fcb8d2;
    &:hover,
    &:active,
    .active {
      color: white;
    }
  }
`;
