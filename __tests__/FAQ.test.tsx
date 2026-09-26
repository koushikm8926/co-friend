import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQ, { FAQS } from '@/components/FAQ';

describe('FAQ', () => {
  it('renders FAQ section, tagline, and all 10 questions', () => {
    render(<FAQ onViewAll={() => {}} />);

    expect(screen.getByText('RENTAL FRIEND & SERVICES')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Frequently Asked Questions/i })).toBeInTheDocument();

    expect(FAQS.length).toBe(10);
    FAQS.forEach((faq) => {
      expect(screen.getByText(faq.q)).toBeInTheDocument();
    });
  });

  it('has question 1 expanded by default and expands other answers when clicked', () => {
    render(<FAQ onViewAll={() => {}} />);

    // Item 1 is open by default
    expect(
      screen.getByText(/CoFriend is a rental friend and services platform that connects you with verified CoFriends/i)
    ).toBeInTheDocument();

    // Click on Question 2 ("Is CoFriend a dating app?")
    const q2Btn = screen.getByRole('button', { name: /Is CoFriend a dating app\?/i });
    fireEvent.click(q2Btn);

    expect(
      screen.getByText(/No\. CoFriend is not a dating app\. It is a rental friend and services platform/i)
    ).toBeInTheDocument();
  });
});
