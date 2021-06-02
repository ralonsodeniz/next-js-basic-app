import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';
import {
  ActionsContainer,
  StyledButton,
  Form,
  FormItem,
  Input,
  Label,
  TextArea,
} from './MeetUpForm.styled';

const MeetUpForm = ({ onAddMeetUp }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const meetupData = {
      title,
      image,
      address,
      description,
    };
    onAddMeetUp(meetupData);
  };

  const handleInputChange = ({ target: { value } }, setter) => setter(value);

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <FormItem>
          <Label htmlFor="title">Meetup Title</Label>
          <Input
            type="text"
            required
            id="title"
            value={title}
            onChange={(event) => handleInputChange(event, setTitle)}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="image">Meetup Image</Label>
          <Input
            type="url"
            required
            id="image"
            value={image}
            onChange={(event) => handleInputChange(event, setImage)}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            required
            id="address"
            value={address}
            onChange={(event) => handleInputChange(event, setAddress)}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            required
            rows="5"
            value={description}
            onChange={(event) => handleInputChange(event, setDescription)}
          />
        </FormItem>
        <ActionsContainer>
          <StyledButton type="submit">Add Meetup</StyledButton>
        </ActionsContainer>
      </Form>
    </Card>
  );
};

MeetUpForm.propTypes = {
  onAddMeetUp: PropTypes.func,
}

export default MeetUpForm;
