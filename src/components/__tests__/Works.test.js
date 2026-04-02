import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Works from 'components/Works';
import data from 'constants/worksData';

describe('Works', () => {
  it('renders correct number of project cards', () => {
    render(<Works />);
    const cards = screen.getAllByRole('region', { name: /^Project / });
    expect(cards).toHaveLength(data.length);
  });
});
