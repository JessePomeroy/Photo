import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	clientName: text('client_name').notNull(),
	email: text('email').notNull(),
	bookingDate: timestamp('booking_date').notNull(),
	createdAt: timestamp('created_at').defaultNow()
});

export const images = pgTable('images', {
	id: serial('id').primaryKey(),
	title: varchar('title', { length: 255 }).notNull(),
	url: text('url').notNull(),
	category: varchar('category', { length: 255 }),
	createdAt: timestamp('created_at').defaultNow()
});

export const bookings = pgTable('bookings', {
	id: serial('id').primaryKey(),
	clientName: varchar('client_name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	bookingDate: timestamp('booking_date').notNull(),
	status: varchar('status', { length: 50 }).default('pending'),
	createdAt: timestamp('created_at').defaultNow()
});
