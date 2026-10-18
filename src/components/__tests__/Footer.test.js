import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from 'components/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders profile links before email', () => {
    const link = screen.getByRole('link', { name: 'LinkedIn (david-guan)' });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/david-guan/');
    expect(screen.getByRole('link', { name: 'Github (EcutDavid)' })).toHaveAttribute('href', 'https://github.com/EcutDavid');
    expect(screen.getAllByRole('link').map(link => link.textContent)).toEqual([
      'LinkedIn (david-guan)', 'Github (EcutDavid)', 'davidguandev@gmail.com'
    ]);
  });

  it('renders email link', () => {
    const link = screen.getByText('davidguandev@gmail.com');
    expect(link).toHaveAttribute('href', 'mailto:davidguandev@gmail.com');
  });
});
