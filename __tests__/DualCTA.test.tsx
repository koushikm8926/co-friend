import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DualCTA from '@/components/DualCTA';

describe('DualCTA', () => {
  it('renders both CTA cards and text', () => {
    render(<DualCTA />);

    expect(screen.getByText('Looking for Company?')).toBeInTheDocument();
    expect(screen.getByText(/Find a CoFriend for your next movie/i)).toBeInTheDocument();
    expect(screen.getByText('Want to Become a CoFriend?')).toBeInTheDocument();
    expect(screen.getByText(/Share your interests, meet new people and earn/i)).toBeInTheDocument();
  });

  it('triggers onFind and onBecome callbacks when provided', () => {
    const handleFind = vi.fn();
    const handleBecome = vi.fn();

    render(<DualCTA onFind={handleFind} onBecome={handleBecome} />);

    const findBtn = screen.getByRole('button', { name: /Find a CoFriend/i });
    fireEvent.click(findBtn);
    expect(handleFind).toHaveBeenCalledTimes(1);

    const becomeBtn = screen.getByRole('button', { name: /Become a CoFriend/i });
    fireEvent.click(becomeBtn);
    expect(handleBecome).toHaveBeenCalledTimes(1);
  });
});
