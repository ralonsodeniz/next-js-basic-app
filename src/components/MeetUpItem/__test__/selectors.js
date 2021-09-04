import { screen } from '@Helpers/test-utils';
import { testIds } from './test-ids';

export const getImage = () => screen.getByRole('img');
export const getTitle = () => screen.getByRole('heading');
export const getAddress = () => screen.getByTestId(testIds.ADDRESS);
export const getButton = () => screen.getByRole('button');
