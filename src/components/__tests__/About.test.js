import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from 'components/About';
import DESCRIPTION_LIST from 'constants/descriptionList';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders bio text from descriptionList', () => {
    // First item has inline HTML tags so text is split across elements
    expect(screen.getByText(/Engineer at/)).toBeInTheDocument();
    // Remaining items render as plain text
    DESCRIPTION_LIST.slice(1).forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders social links', () => {
    expect(screen.getByText('Github')).toHaveAttribute('href', 'https://github.com/EcutDavid');
    expect(screen.getByText('Stack Overflow')).toHaveAttribute('href', 'https://stackoverflow.com/users/5076405/david-guan');
    expect(screen.getByText('Medium')).toHaveAttribute('href', 'https://medium.com/@davidguandev');
    expect(screen.getByText('Youtube')).toHaveAttribute('href', 'https://www.youtube.com/channel/UCxSyYbODJF3ULNMoRwxjJbg');
  });

  it('renders Works and Articles sections', () => {
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Articles')).toBeInTheDocument();
  });
});
