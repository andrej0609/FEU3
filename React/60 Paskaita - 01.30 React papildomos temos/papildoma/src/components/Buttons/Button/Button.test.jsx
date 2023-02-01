import Button from './Button';
import { render, fireEvent } from '@testing-library/react';

it('should render button', () => {
  const { getByTitle } = render(<Button />);
  const button = getByTitle('dummyButton');
  expect(button).toBeTruthy();
});

describe('Button', () => {
  it('should change text on click', () => {
    const { getByTitle } = render(<Button />);
    const button = getByTitle('dummyButton');
    expect(button.textContent).toBe('Paspausk mane');
    fireEvent.click(button);
    expect(button.textContent).toBe('Aciu uz paspaudima');
  });
});

