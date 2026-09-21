import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renders navigation links and logo', () => {
    render(<Navbar onOpenComingSoon={() => {}} />);

    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /CoFriends/i })).toBeInTheDocument();
  });

  it('triggers onOpenComingSoon when clicking Services or CoFriends nav items', () => {
    const handleComingSoon = vi.fn();
    render(<Navbar onOpenComingSoon={handleComingSoon} />);

    const servicesBtn = screen.getByRole('button', { name: /Services/i });
    fireEvent.click(servicesBtn);
    expect(handleComingSoon).toHaveBeenCalledWith('Services booking & exploration');

    const cofriendsBtn = screen.getByRole('button', { name: /CoFriends/i });
    fireEvent.click(cofriendsBtn);
    expect(handleComingSoon).toHaveBeenCalledWith('CoFriends discovery & profiles');
  });

  it('triggers onOpenComingSoon when clicking Login or Sign Up buttons', () => {
    const handleComingSoon = vi.fn();
    render(<Navbar onOpenComingSoon={handleComingSoon} />);

    const loginBtn = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginBtn);
    expect(handleComingSoon).toHaveBeenCalledWith('User Login & Account Access');

    const signupBtn = screen.getByRole('button', { name: /Sign Up/i });
    fireEvent.click(signupBtn);
    expect(handleComingSoon).toHaveBeenCalledWith('New User Registration');
  });
});
