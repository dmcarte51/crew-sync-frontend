import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Calendar from './Calendar.js';

jest.mock('./EmpWorkWeek', () => {
    return function DummyEmpWorkWeek() {
      return <div data-testid="mock-empworkweek"></div>;
    };
});

describe('Calendar', () => {
    const daysOfWeek = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    it('renders without empData', () => {
        const { getByText } = render(<Calendar />);
        expect(getByText('Monday')).toBeInTheDocument();
    });
      
    it('renders the correct days of the week', () => {
        // Destructure getAllByRole from the render method
        const { getAllByRole } = render(<Calendar />);
        daysOfWeek.forEach(day => {
            if (day) { // Skip the empty string
                const dayElements = getAllByRole('link', { name: day });
                expect(dayElements).toHaveLength(1);
            }
        });
    });
    
    it('renders the EmpWorkWeek component for each day', async () => {
        const empData = [
            { day: 'Monday', shifts: [] },
            { day: 'Tuesday', shifts: [] },
            { day: 'Wednesday', shifts: [] },
            { day: 'Thursday', shifts: [] },
            { day: 'Friday', shifts: [] },
            { day: 'Saturday', shifts: [] },
            { day: 'Sunday', shifts: [] },
        ];
        const { getAllByTestId } = render(<Calendar empData={empData} />);
        await waitFor(() => {
            const empWorkWeeks = getAllByTestId('mock-empworkweek');
            expect(empWorkWeeks).toHaveLength(1);
        });
    });
    
});
