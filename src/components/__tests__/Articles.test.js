import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Articles from 'components/Articles';
import data from 'constants/articles';

describe('Articles', () => {
  beforeEach(() => {
    render(<Articles />);
  });

  it('shows the six most recent article links by default', () => {
    expect(screen.getAllByRole('article')).toHaveLength(6);
    expect(screen.getAllByRole('link')).toHaveLength(6);
    data.slice(0, 6).forEach((article) => {
      expect(screen.getByRole('link', { name: article.name })).toHaveAttribute('href', article.url);
    });
  });

  it('reveals all articles and can collapse back to six', () => {
    const toggle = screen.getByRole('button', { name: 'Show all articles' });
    const olderArticles = document.getElementById(toggle.getAttribute('aria-controls'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(olderArticles).not.toBeVisible();

    fireEvent.click(toggle);

    expect(screen.getByRole('button', { name: 'Show fewer articles' })).toBe(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(olderArticles).toBeVisible();
    expect(screen.getAllByRole('article')).toHaveLength(data.length);
    data.forEach((article) => {
      expect(screen.getByRole('link', { name: article.name })).toHaveAttribute('href', article.url);
      expect(screen.getByRole('article', { name: `${article.name}, ${article.date}` })).toBeVisible();
    });

    fireEvent.click(toggle);

    expect(screen.getByRole('button', { name: 'Show all articles' })).toBe(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(olderArticles).not.toBeVisible();
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });
});
