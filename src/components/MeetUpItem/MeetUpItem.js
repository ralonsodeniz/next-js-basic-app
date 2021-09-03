import { useCallback } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Card from '@Components/ui/Card';
import { literals } from '@Enums/literals';
import {
  ActionsContainer,
  StyledButton,
  Content,
  StyledImage,
  ImageContainer,
  Item,
  Title,
} from './MeetUpItem.styled';

const MeetUpItem = ({ title, address, id, ...imageProps }) => {
  const { push } = useRouter();
  const handleNavigate = useCallback(() => push(`/${id}`), [id]);

  return (
    <Item>
      <Card>
        <ImageContainer>
          <StyledImage alt={title} {...imageProps} placeholder="blur" />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <address>{address}</address>
        </Content>
        <ActionsContainer>
          <StyledButton onClick={handleNavigate}>
            {literals.meetupItem.DETAILS}
          </StyledButton>
        </ActionsContainer>
      </Card>
    </Item>
  );
};

MeetUpItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  id: PropTypes.string,
};

export default MeetUpItem;
