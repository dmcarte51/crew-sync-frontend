import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import AvailabilityInput from './EmpAvail';

describe('AvailabilityInput', () => {

  it('renders the component', () => {
    render(<AvailabilityInput />);
    const headingElement = screen.getByRole('heading', { name: /availability/i, level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  it('updates availability when checkbox is clicked', () => {
    render(<AvailabilityInput />);
    
    // Find the paragraph for Monday
    const mondayParagraph = screen.getByText('Monday:');
    // Assuming the structure is consistent, find the parent and then the checkbox container
    const checkboxContainer = mondayParagraph.parentElement.querySelector('.checkbox-container');
    // Now get all checkboxes within this container
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const checkbox8AM = checkboxes[0]; // Assuming the first checkbox corresponds to 8:00 AM
    
    fireEvent.click(checkbox8AM);
    expect(checkbox8AM).toBeChecked();
  });  

  // it('displays availability correctly', async () => {
  //   const { asFragment } = render(<AvailabilityInput />);
    
  //   // Click on the checkbox for Monday at 8:00 AM
  //   const mondayCheckbox = screen.getByLabelText('8:00', { selector: 'input[type="checkbox"]' });
  //   fireEvent.click(mondayCheckbox);
    
  //   // Wait for the component to finish updating after state changes
  //   await waitFor(() => {
  //     expect(asFragment()).toMatchSnapshot();
  //   });
  // });  
  
  it('saves availability when save button is clicked', () => {
    render(<AvailabilityInput />);
    const button = screen.getByRole('button', { name: /save availability/i });
    
    // This is a placeholder for what you'd expect to happen when the button is clicked.
    // Since the actual implementation of saveDataToCSV function uses console.log,
    // it might not change anything in the DOM or trigger any observable behavior in the test.
    // You might want to mock this function to test its behavior or check if it's been called.
    
    fireEvent.click(button);
    
    // TODO: Add assertion for CSV data.
    // Since the component only logs the CSV data to the console, there's nothing to assert in the DOM.
    // If the component were to trigger a download or update the state/display, you could assert that.
  });
});
