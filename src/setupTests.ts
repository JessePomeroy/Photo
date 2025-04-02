import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit's app navigation
vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

// Mock SvelteKit's environment variables
vi.mock('$app/environment', () => ({
	browser: true,
	dev: true,
	building: false
}));
