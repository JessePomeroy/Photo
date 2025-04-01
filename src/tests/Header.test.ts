// src/tests/Header.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Header from '../lib/components/Header.svelte';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(Header);
    expect(container).toBeTruthy();
  });
});