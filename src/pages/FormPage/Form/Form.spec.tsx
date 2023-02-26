import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders form', () => {
  const formMock = {
    id: '0',
    question: '1',
    possibleAnswers: ['a', 'b', 'c', 'd'],
  };

  render(<Form form={formMock} />);
  const linkElement = screen.getByText('header');
  expect(linkElement).toBeInTheDocument();
});
