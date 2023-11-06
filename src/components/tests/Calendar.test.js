import { render } from '@testing-library/react';
import React from 'react';
import Calendar from '../Calendar.js';

jest.mock('./EmpWorkWeek', () => {
    return function DummyEmpWorkWeek() {
      return <div data-testid="mock-empworkweek"></div>;
    };
});

describe('Calendar', () => {

    it('renders without empData', () => {
        render(<Calendar />);
    });
      
    it('renders the correct days of the week', () => {
        const daysOfWeek = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const { getByText } = render(<Calendar daysOfWeek={daysOfWeek} />);
        daysOfWeek.forEach(day => {
            const dayElement = getByText(day);
            expect(dayElement).toBeInTheDocument();
        });
    });

    it('renders the EmpWorkWeek component for each day', () => {
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
        const empWorkWeeks = getAllByTestId('emp-work-week');
        expect(empWorkWeeks).toHaveLength(7);
    });
    
});
