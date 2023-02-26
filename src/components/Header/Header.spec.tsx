import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText('header');
  expect(linkElement).toBeInTheDocument();
});
