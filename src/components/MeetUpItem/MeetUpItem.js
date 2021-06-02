import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  ActionsContainer,
  StyledButton,
  Content,
  Image,
  ImageContainer,
  Item,
  Title,
} from './MeetUpItem.styled';
import Card from '../ui/Card';

const MeetUpItem = ({ image, title, address, id }) => {
  const { push } = useRouter();
  const handleNavigate = () => push(`/${id}`);

  return (
    <Item>
      <Card>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <address>{address}</address>
        </Content>
        <ActionsContainer>
          <StyledButton onClick={handleNavigate}>Show Details</StyledButton>
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
