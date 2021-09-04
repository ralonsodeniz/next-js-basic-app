import { screen } from '@Helpers/test-utils';

const labels = {
  title: 'Meetup Title',
  image: 'Meetup Image',
  address: 'Address',
  description: 'Description',
};

export const getTitleInput = () =>
  screen.getByRole('textbox', { name: labels.title });
export const getImageInput = () =>
  screen.getByRole('textbox', { name: labels.image });
export const getAddressInput = () =>
  screen.getByRole('textbox', { name: labels.address });
export const getDescriptionInput = () =>
  screen.getByRole('textbox', { name: labels.description });
export const getSubmitButton = () => screen.getByRole('button');
