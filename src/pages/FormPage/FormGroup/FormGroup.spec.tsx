import { render, screen } from '@testing-library/react';
import FormGroup from './FormGroup';

test('renders form group', () => {
  render(<FormGroup />);
  const linkElement = screen.getByText('header');
  expect(linkElement).toBeInTheDocument();
});
