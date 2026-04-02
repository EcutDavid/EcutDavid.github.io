import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from 'components/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders LinkedIn link', () => {
    const link = screen.getByText('LinkedIn');
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/david-guan/');
  });

  it('renders email link', () => {
    const link = screen.getByText('davidguandev@gmail.com');
    expect(link).toHaveAttribute('href', 'mailto:davidguandev@gmail.com');
  });
});
