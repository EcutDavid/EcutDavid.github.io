import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from 'components/Nav';

describe('Nav', () => {
  beforeEach(() => {
    render(<Nav />);
  });

  it('renders all 4 navigation links', () => {
    expect(screen.getAllByText('About')).toHaveLength(1);
    expect(screen.getAllByText('Projects')).toHaveLength(1);
    expect(screen.getAllByText('Articles')).toHaveLength(1);
    expect(screen.getAllByText('Contact')).toHaveLength(1);
  });

  it('has aria-label on nav element', () => {
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('hamburger button has correct aria attributes', () => {
    const hamburger = screen.getByLabelText('Toggle menu');
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles aria-expanded when hamburger is clicked', () => {
    const hamburger = screen.getByLabelText('Toggle menu');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows mobile menu links when hamburger is open', () => {
    const hamburger = screen.getByLabelText('Toggle menu');
    fireEvent.click(hamburger);
    // Desktop links + mobile menu links = 2 of each
    expect(screen.getAllByText('About')).toHaveLength(2);
    expect(screen.getAllByText('Projects')).toHaveLength(2);
  });

  it('closes menu when a mobile link is clicked', () => {
    const hamburger = screen.getByLabelText('Toggle menu');
    fireEvent.click(hamburger);
    const mobileAboutButtons = screen.getAllByText('About');
    // Click the second one (mobile menu)
    fireEvent.click(mobileAboutButtons[1]);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });
});
