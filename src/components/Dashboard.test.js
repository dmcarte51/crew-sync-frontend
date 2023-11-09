import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  test('renders "Nothing here yet" text', () => {
    render(<Dashboard />);
    const textElement = screen.getByText(/Nothing here yet/i);
    expect(textElement).toBeInTheDocument();
  });
});