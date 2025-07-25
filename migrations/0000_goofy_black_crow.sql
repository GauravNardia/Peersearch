CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" text NOT NULL,
	"username" text NOT NULL,
	"bio" text NOT NULL,
	"followers" text,
	"joined" text,
	"links" text,
	"skill" text[] NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
