import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OurValues from '@/components/OurValues';

describe('OurValues', () => {
  it('renders section heading and subtitle', () => {
    render(<OurValues />);

    expect(screen.getByText('OUR VALUES')).toBeInTheDocument();
    expect(screen.getByText(/People First\./i)).toBeInTheDocument();
    expect(screen.getByText(/Always\./i)).toBeInTheDocument();
    expect(
      screen.getByText('The values that guide everything we do at CoFriend.')
    ).toBeInTheDocument();
  });

  it('renders all four core value pillars', () => {
    render(<OurValues />);

    expect(screen.getByText('Respect')).toBeInTheDocument();
    expect(screen.getByText('We treat everyone with kindness and fairness.')).toBeInTheDocument();

    expect(screen.getByText('Safety')).toBeInTheDocument();
    expect(screen.getByText('We prioritize a secure and positive environment.')).toBeInTheDocument();

    expect(screen.getByText('Authenticity')).toBeInTheDocument();
    expect(
      screen.getByText('We encourage genuine connections and honest profiles.')
    ).toBeInTheDocument();

    expect(screen.getByText('Meaningful Experiences')).toBeInTheDocument();
    expect(
      screen.getByText('We believe in creating moments that truly matter')
    ).toBeInTheDocument();
  });
});
