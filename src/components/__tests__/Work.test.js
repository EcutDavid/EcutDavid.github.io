import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Work from 'components/Work';

describe('Work', () => {
  const baseProps = {
    title: 'Test Project',
    picture: 'test.png',
    pictureAlt: 'Test project screenshot',
    description: <p>A test description</p>,
    className: 'work',
    index: 0
  };

  it('renders title, image, and description', () => {
    render(<Work {...baseProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByAltText('Test project screenshot')).toHaveAttribute('src', 'test.png');
    expect(screen.getByText('A test description')).toBeInTheDocument();
  });

  it('renders date when provided', () => {
    render(<Work {...baseProps} date="Apr 2019" />);
    expect(screen.getByText('Apr 2019')).toBeInTheDocument();
  });

  it('does not render date when not provided', () => {
    render(<Work {...baseProps} />);
    expect(screen.queryByText(/\w{3} \d{4}/)).not.toBeInTheDocument();
  });
});
