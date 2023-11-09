import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react'; // Make sure to import React
import Landing from './Landing';

test('renders welcome message', () => {
  render(<Landing />);
  const welcomeMessage = screen.getByText(/Welcome to Our App/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders login and register components', () => {
  render(<Landing />);
  const loginComponent = screen.getByRole('button', { name: /login/i });
  const registerComponent = screen.getByRole('button', { name: /register/i });
  expect(loginComponent).toBeInTheDocument();
  expect(registerComponent).toBeInTheDocument();
});

test('displays dashboard after successful login', () => {
  render(<Landing />);
  const loginComponent = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginComponent);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(submitButton);
  const dashboardMessage = screen.getByText(/Welcome to the Dashboard/i);
  expect(dashboardMessage).toBeInTheDocument();
});