import PropTypes from 'prop-types';
import { Detail, Image } from './MeetUpDetail.styled';

const MeetUpDetail = ({ data }) => {
  const { title, image, address, description } = data;

  return (
    <Detail>
      <Image src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Detail>
  );
};

MeetUpDetail.propTypes = {
  data: PropTypes.object,
};

export default MeetUpDetail;
