import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ComingSoonModal } from '@/components/ComingSoon';

describe('ComingSoonModal', () => {
  it('does not render when open is false', () => {
    const { container } = render(
      <ComingSoonModal open={false} onClose={() => {}} title="Test Title" />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders modal with custom title and feature when open is true', () => {
    render(
      <ComingSoonModal
        open={true}
        onClose={() => {}}
        title="Find a CoFriend"
        feature="Search & Booking"
      />
    );

    expect(screen.getByText('Find a CoFriend')).toBeInTheDocument();
    expect(screen.getByText(/Search & Booking/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email to get notified')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get Early Access/i })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <ComingSoonModal
        open={true}
        onClose={handleClose}
        title="Test Modal"
      />
    );

    const closeBtn = screen.getByLabelText('Close modal');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
