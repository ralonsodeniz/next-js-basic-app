import PropTypes from 'prop-types';
import MeetUpItem from '../MeetUpItem';
import { List } from './MeetUpList.styled';

const MeetUpList = ({ meetups }) => (
  <List>
    {meetups.map((meetup) => {
      const { id } = meetup;

      return <MeetUpItem key={id} {...meetup} />;
    })}
  </List>
);

MeetUpList.propTypes = {
  meetups: PropTypes.array,
};

export default MeetUpList;
