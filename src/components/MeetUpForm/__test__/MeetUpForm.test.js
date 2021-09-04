import { render, mockRouter, userEvent } from '@Helpers/test-utils';
import { deepEqualityCheck } from '@Utils/deep-equality-check';
import MeetUpForm from '../MeetUpForm';
import { formData } from './mocks';
import {
  getAddressInput,
  getDescriptionInput,
  getImageInput,
  getSubmitButton,
  getTitleInput,
} from './selectors';

let submittedData;
const onAddMeetUp = (data) => (submittedData = data);
const renderComponent = () => render(<MeetUpForm onAddMeetUp={onAddMeetUp} />);
mockRouter({ route: '/' });

describe('MeetUpItem tests', () => {
  beforeEach(() => {
    renderComponent();
    const titleInput = getTitleInput();
    const imageInput = getImageInput();
    const addressInput = getAddressInput();
    const descriptionInput = getDescriptionInput();
    userEvent.type(titleInput, formData.title);
    userEvent.type(imageInput, formData.image);
    userEvent.type(addressInput, formData.address);
    userEvent.type(descriptionInput, formData.description);
  });

  it('should should fill the inputs with the correct data', () => {
    const titleInput = getTitleInput();
    const imageInput = getImageInput();
    const addressInput = getAddressInput();
    const descriptionInput = getDescriptionInput();

    expect(titleInput).toHaveValue(formData.title);
    expect(imageInput).toHaveValue(formData.image);
    expect(addressInput).toHaveValue(formData.address);
    expect(descriptionInput).toHaveValue(formData.description);
  });

  it('should send the correct data to the endpoint', () => {
    const submitButton = getSubmitButton();
    userEvent.click(submitButton);

    expect(deepEqualityCheck(submittedData, formData)).toBeTruthy();
  });
});
