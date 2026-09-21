import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// Mock Next/image
vi.mock('next/image', () => ({
  default: (props: any) => {
    return React.createElement('img', { ...props, alt: props.alt || '' });
  },
}));

// Mock Next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

// Mock Next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: any) => {
    return React.createElement('a', { href, ...rest }, children);
  },
}));

// Mock framer-motion for unit testing
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  const motion = new Proxy(
    {},
    {
      get: (_target, prop: string) => {
        return ({
          children,
          whileHover,
          whileTap,
          whileInView,
          initial,
          animate,
          exit,
          transition,
          viewport,
          ...rest
        }: any) => React.createElement(prop, rest, children);
      },
    }
  );

  return {
    ...actual,
    motion,
    AnimatePresence: ({ children }: any) =>
      React.createElement(React.Fragment, null, children),
  };
});
