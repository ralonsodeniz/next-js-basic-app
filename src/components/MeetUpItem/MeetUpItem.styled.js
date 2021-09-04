import styled from 'styled-components';
import Image from 'next/image';
import { styled as muiStyled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { mediaQueries } from '@Styles/helpers/media-queries';

export const Item = styled.li`
  margin: 1rem 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  ${mediaQueries.portrait} {
    height: 20rem;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #2c292b;
`;

export const ActionsContainer = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const StyledButton = muiStyled(Button)({
  font: 'inherit',
  cursor: 'pointer',
  color: '#77002e',
  border: '1px solid #77002e',
  backgroundColor: 'transparent',
  padding: '0.5rem 1.5rem',
  borderRadius: '4px',
  textTransform: 'none',

  '&:hover, &:active': {
    backgroundColor: '#ffe2ed',
  },
});
