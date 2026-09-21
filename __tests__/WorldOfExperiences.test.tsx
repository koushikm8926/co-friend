import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorldOfExperiences from '@/components/WorldOfExperiences';

describe('WorldOfExperiences', () => {
  it('renders section title and badge', () => {
    render(<WorldOfExperiences />);

    expect(screen.getByText('A WORLD OF EXPERIENCES')).toBeInTheDocument();
    expect(screen.getByText(/So Many Ways to/i)).toBeInTheDocument();
    expect(screen.getByText(/Together\./i)).toBeInTheDocument();
  });

  it('renders all 8 experience cards with links', () => {
    render(<WorldOfExperiences />);

    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Coffee')).toBeInTheDocument();
    expect(screen.getByText('Shopping')).toBeInTheDocument();
    expect(screen.getByText('Travel')).toBeInTheDocument();
    expect(screen.getByText('Fitness')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Study Buddy')).toBeInTheDocument();
    expect(screen.getByText('Cooking')).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(8);
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/#cofriends');
    });
  });
});
