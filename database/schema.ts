import { pgTable, text, uuid, timestamp, PgArray } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  profilePhoto: text('profile_photo').notNull().default("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekN47BYw7zsiAl6i45IHvsoWETLtFoRUKkg&s"),
  fullName: text('full_name').notNull(),
  username: text('username').notNull(),
  bio: text('bio').notNull(),
  followers: text('followers'),
  joined: text('joined'),
  links: text('links'),
  skills: text('skill').array().notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});
