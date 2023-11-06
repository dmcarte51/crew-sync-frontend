import { fireEvent, render, screen } from '@testing-library/react';
import AvailabilityInput from './EmpAvail';

describe('AvailabilityInput', () => {
  it('renders the component', () => {
    render(<AvailabilityInput />);
    const headingElements = screen.getAllByRole('heading', { name: /availability/i });
    expect(headingElements.length).toBeGreaterThan(0);
    expect(headingElement).toBeInTheDocument();
  });

  it('updates availability when checkbox is clicked', () => {
    render(<AvailabilityInput />);
  
    // Find the text 'Monday' to get the context
    const mondayText = screen.getByText(/monday/i);
  
    // Find the checkbox for '8:00' within the context of 'Monday'
    const checkbox = within(mondayText.parentElement).getByLabelText('8:00');
  
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('displays availability correctly', () => {
    render(<AvailabilityInput />);
    const checkbox = screen.getByLabelText('Monday: 8:00');
    fireEvent.click(checkbox);
    const displayElement = screen.getByText(/monday: 8:00 - 9:00/i);
    expect(displayElement).toBeInTheDocument();
  });

  it('saves availability to CSV when button is clicked', () => {
    render(<AvailabilityInput />);
    const button = screen.getByRole('button', { name: /save availability/i });
    fireEvent.click(button);
    // TODO: Add assertion for CSV data.
  });
});