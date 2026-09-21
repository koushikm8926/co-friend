import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FAQ from '@/components/FAQ';

describe('FAQ', () => {
  it('renders FAQ section and questions', () => {
    render(<FAQ onViewAll={() => {}} />);

    expect(screen.getByText('QUICK ANSWERS')).toBeInTheDocument();
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText('What is CoFriend?')).toBeInTheDocument();
    expect(screen.getByText('Are CoFriends verified?')).toBeInTheDocument();
    expect(screen.getByText('Is CoFriend a dating platform?')).toBeInTheDocument();
  });

  it('expands accordion answer when question is clicked', () => {
    render(<FAQ onViewAll={() => {}} />);

    const questionBtn = screen.getByRole('button', { name: /What is CoFriend\?/i });
    fireEvent.click(questionBtn);

    expect(
      screen.getByText(/CoFriend is India's most trusted social and lifestyle rental support services marketplace/i)
    ).toBeInTheDocument();
  });
});
