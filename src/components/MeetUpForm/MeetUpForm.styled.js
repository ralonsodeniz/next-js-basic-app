import styled, { css } from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const inputStyles = css`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 1rem;
`;

export const FormItem = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  ${inputStyles};
`;

export const TextArea = styled.textarea`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

export const StyledButton = muiStyled(Button)({
  font: 'inherit',
  cursor: 'pointer',
  backgroundColor: '#77002e',
  color: 'white',
  padding: '0.5rem 1.5rem',
  border: '1px solid #77002e',
  borderRadius: '4px',
  fontWeight: 'bold',

  '&:hover, &:active': {
    backgroundColor: '#a50e48',
    borderColor: '#a50e48',
  }
});
