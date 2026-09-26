import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Services, { POPULAR_SERVICES } from '@/components/Services';

describe('Services', () => {
  it('renders section title and badge', () => {
    const handleSelect = vi.fn();
    render(<Services onSelectService={handleSelect} />);

    expect(screen.getByRole('heading', { level: 2, name: /Popular Services/i })).toBeInTheDocument();
    expect(screen.getByText('Explore Companions')).toBeInTheDocument();

  });

  it('renders all 12 service cards and calls onSelectService on click', () => {
    const handleSelect = vi.fn();
    render(<Services onSelectService={handleSelect} />);

    expect(POPULAR_SERVICES.length).toBe(12);

    POPULAR_SERVICES.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });

    // Click on Coffee Companion
    const coffeeBtn = screen.getByText('Coffee Companion').closest('button');
    expect(coffeeBtn).toBeDefined();
    if (coffeeBtn) {
      fireEvent.click(coffeeBtn);
      expect(handleSelect).toHaveBeenCalledWith('Coffee Companion');
    }
  });

  it('renders navigation controls and pagination dots', () => {
    render(<Services onSelectService={vi.fn()} />);

    expect(screen.getByRole('button', { name: /Next service/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Previous service/i })).toBeInTheDocument();

    const dots = screen.getAllByRole('button', { name: /Jump to/i });
    expect(dots.length).toBe(12);
  });
});
