import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Articles from 'components/Articles';
import data from 'constants/articles';

describe('Articles', () => {
  beforeEach(() => {
    render(<Articles />);
  });

  it('renders article links from data', () => {
    data.forEach((article) => {
      const link = screen.getByText(article.name);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', article.url);
    });
  });

  it('renders each article with name and date', () => {
    data.forEach((article) => {
      expect(screen.getByText(article.name)).toBeInTheDocument();
      // Each article's aria-label includes both name and date
      expect(screen.getByLabelText(`${article.name}, ${article.date}`)).toBeInTheDocument();
    });
  });
});
