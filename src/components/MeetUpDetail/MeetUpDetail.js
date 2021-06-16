import PropTypes from 'prop-types';
import Image from 'next/image';
import { Detail } from './MeetUpDetail.styled';

const MeetUpDetail = ({ data }) => {
  const { title, address, description, ...imageProps } = data;

  return (
    <Detail>
      <Image alt={title} {...imageProps} placeholder="blur" />
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
