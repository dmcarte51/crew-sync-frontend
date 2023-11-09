import { render, screen } from '@testing-library/react';
import EmpWorkWeek from './EmpWorkWeek';

describe('EmpWorkWeek', () => {
  test('renders employee names and work times', () => {
    const empData = [
      {
        name: 'John Doe',
        startTimes: ['9:00', '10:00', 'Off', '9:00', '9:00'],
        endTimes: ['17:00', '18:00', 'Off', '17:00', '17:00'],
      },
      {
        name: 'Jane Smith',
        startTimes: ['Off', '9:00', '9:00', '9:00', '9:00'],
        endTimes: ['Off', '17:00', '17:00', '17:00', '17:00'],
      },
    ];

    render(<EmpWorkWeek empData={empData} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('9:00 - 17:00')).toBeInTheDocument();
    expect(screen.getByText('10:00 - 18:00')).toBeInTheDocument();
    expect(screen.getByText('OFF')).toBeInTheDocument();
  });

  test('renders "No employee data available." when empData is empty', () => {
    const empData = [];

    render(<EmpWorkWeek empData={empData} />);

    expect(screen.getByText('No employee data available.')).toBeInTheDocument();
  });

  test('renders "No employee data available." when empData is null', () => {
    const empData = null;

    render(<EmpWorkWeek empData={empData} />);

    expect(screen.getByText('No employee data available.')).toBeInTheDocument();
  });

  test('renders "No employee data available." when empData is not an array', () => {
    const empData = {};

    render(<EmpWorkWeek empData={empData} />);

    expect(screen.getByText('No employee data available.')).toBeInTheDocument();
  });
});