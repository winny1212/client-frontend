import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders normally', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello!! DIY GROOMING Team!');
  expect(linkElement).toBeInTheDocument();
});
