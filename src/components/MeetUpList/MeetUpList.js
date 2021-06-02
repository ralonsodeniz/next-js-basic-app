import PropTypes from 'prop-types'
import MeetUpItem from '../MeetUpItem';
import { List } from './MeetUpList.styled';

const MeetUpList = ({ meetups }) => (
  <List>
    {meetups.map((meetup) => {
      const { id, image, title, address } = meetup;

      return (
        <MeetUpItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      );
    })}
  </List>
);

MeetUpList.propTypes = {
  meetups: PropTypes.array,
}

export default MeetUpList;
