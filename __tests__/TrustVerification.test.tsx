import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TrustVerification from '@/components/TrustVerification';

describe('TrustVerification', () => {
  it('renders section title and eyebrow', () => {
    render(<TrustVerification />);

    expect(screen.getByText('HOW WE VERIFY COFRIENDS')).toBeInTheDocument();
    expect(screen.getByText(/A Trusted Community/i)).toBeInTheDocument();
    expect(screen.getByText(/Starts with Trust\./i)).toBeInTheDocument();
  });

  it('renders all 5 verification steps with titles and descriptions', () => {
    render(<TrustVerification />);

    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Create your account')).toBeInTheDocument();

    expect(screen.getByText('Submit Details')).toBeInTheDocument();
    expect(screen.getByText('Provide required information')).toBeInTheDocument();

    expect(screen.getByText('Identity Verification')).toBeInTheDocument();
    expect(screen.getByText('Document & selfie verification')).toBeInTheDocument();

    expect(screen.getByText('Profile Review')).toBeInTheDocument();
    expect(screen.getByText('Our team reviews your profile')).toBeInTheDocument();

    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Once verified, your profile goes live')).toBeInTheDocument();
  });
});
