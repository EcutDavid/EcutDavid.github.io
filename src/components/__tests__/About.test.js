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
    expect(screen.getByRole('region', { name: 'introduction' })).toHaveTextContent(
      'Hey, I’m Wenxiang (David) Guan, a software engineer at Canva.'
    );
    // Remaining items render as plain text
    DESCRIPTION_LIST.slice(1).forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders Works and Articles sections', () => {
    expect(screen.getByText('Side Projects')).toBeInTheDocument();
    expect(screen.getByText('Articles')).toBeInTheDocument();
  });
});
