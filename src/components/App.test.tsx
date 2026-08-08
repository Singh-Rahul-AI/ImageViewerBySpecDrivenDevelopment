import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the initial empty state', () => {
    render(<App />);
    expect(screen.getByText(/browse images from any folder/i)).toBeInTheDocument();
    expect(screen.getByText(/select a folder to begin/i)).toBeInTheDocument();
  });
});
