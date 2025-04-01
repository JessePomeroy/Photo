import { defineConfig } from 'drizzle-kit';

// runtime safety check that ensures the required environment variable exists:
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	// This is the path to your schema file
	schema: './src/lib/server/db/schema.ts',
	// This is the path to your migration file
	dbCredentials: { url: process.env.DATABASE_URL },
	// verbose: true will provide more detailed logging
	verbose: true,
	// strict: true enforces stricter type checking
	strict: true,
	// dialect: 'postgresql' specifies which database we're using
	dialect: 'postgresql'
});
