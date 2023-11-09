import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

jest.mock('./NavBar', () => () => <div data-testid="navbar" />);

test('renders navbar and children', () => {
  render(
    <Layout>
      <div data-testid="child" />
    </Layout>
  );
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
  expect(screen.getByTestId('child')).toBeInTheDocument();
});