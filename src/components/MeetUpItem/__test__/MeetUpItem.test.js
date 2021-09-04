import { render, mockRouter, userEvent } from '@Helpers/test-utils';
import MeetUpItem from '../MeetUpItem';
import { itemData } from './mocks';
import { getAddress, getButton, getImage, getTitle } from './selectors';

const renderComponent = () => render(<MeetUpItem {...itemData} />);
mockRouter({ route: '/' });

describe('MeetUpItem tests', () => {
  beforeEach(() => renderComponent());

  it('should should render the provided item', () => {
    const image = getImage();
    const title = getTitle();
    const address = getAddress();

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  it('should navigate to detail page when button is clicked', () => {
    const button = getButton();
    userEvent.click(button);

    expect(window.location.pathname).toEqual(`/${itemData.id}`);
  });
});
