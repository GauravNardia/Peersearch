ALTER TABLE "users" RENAME TO "profiles";--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT "users_id_unique";--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_unique" UNIQUE("id");