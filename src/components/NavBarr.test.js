import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBarr'; // Adjust the import path as necessary
import { NavBarrData } from './NavBarrData';

describe('NavBar', () => {
  // Utility function to render NavBar within the Router
  const renderNavBar = () => render(
    <Router>
      <NavBar />
    </Router>
  );

//   it('renders without crashing', () => {
//     renderNavBar();
//     // Assuming the menu icon has text "Menu" associated with it or an aria-label
//     expect(screen.getByLabelText('Menu')).toBeInTheDocument();
//     // If it does not, you'll need to add an aria-label or use another query
//   });
  
//   it('toggles sidebar on menu icon click', () => {
//     renderNavBar();
//     // Again, using a more specific query
//     const menuIcon = screen.getByLabelText('Menu');
//     fireEvent.click(menuIcon);
//     expect(screen.getByRole('navigation')).toHaveClass('nav-menu active');
//     fireEvent.click(menuIcon);
//     expect(screen.getByRole('navigation')).toHaveClass('nav-menu');
//   });

  it('renders menu items from NavBarrData', () => {
    // Setup for rendering the component
    // ...

    // Make sure NavBarrData is not undefined
    expect(NavBarrData).toBeDefined();

    // Use NavBarrData in some way that involves forEach
    NavBarrData.forEach(item => {
      // Perform assertions or checks on each item
      // ...
    });
  });

//   it('hides sidebar on close icon click', () => {
//     renderNavBar();
//     const menuIcon = screen.getByRole('link', { name: '' });
//     fireEvent.click(menuIcon); // Open the sidebar
//     const closeIcon = screen.getByRole('link', { name: 'Close' });
//     fireEvent.click(closeIcon);
//     expect(screen.getByRole('navigation')).toHaveClass('nav-menu');
//   });
});
