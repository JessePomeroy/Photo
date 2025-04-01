import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	clientName: text('client_name').notNull(),
  	email: text('email').notNull(),
  	bookingDate: timestamp('booking_date').notNull(),
  	createdAt: timestamp('created_at').defaultNow()
});
