import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search for weather by city link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search weather by city/i);
  expect(linkElement).toBeInTheDocument();
});
