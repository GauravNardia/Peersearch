"use server";

import { sql, and, or } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { profiles } from "@/database/schema";
import { eq } from "drizzle-orm";

interface Props {
  data: any;
  username: string;
}


export const insertProfile = async ({ data, username }: Props) => {
  try {
    // Check if user already exists
    const existing = await db
      .select()
      .from(profiles)
      .where(eq(profiles.username, username))
      .limit(1);

    if (existing.length === 0) {
      // No existing record — insert fresh
      await db.insert(profiles).values({
        profilePhoto: data.profilephoto,
        fullName: data.name,
        username,
        bio: data.bio,
        followers: data.followers,
        joined: data.joined,
        links: data.links,
        skills: data.skills,
      });

      console.log(`✅ Inserted new profile for ${username}`);
    } else {
      const current = existing[0];

      const updates: Partial<typeof current> = {};

      if (data.profilephoto) updates.profilePhoto = data.profilephoto;
      if (data.name) updates.fullName = data.name;
      if (data.bio) updates.bio = data.bio;
      if (data.followers) updates.followers = data.followers;
      if (data.joined) updates.joined = data.joined;
      if (data.links) updates.links = data.links;
      if (data.skills) updates.skills = data.skills;

      if (Object.keys(updates).length > 0) {
        await db
          .update(profiles)
          .set(updates)
          .where(eq(profiles.username, username));

      } else {
        console.log(`✅ No new data for ${username}, skipping update`);
      }
    }
  } catch (err: any) {
    console.error(`❌ DB error for ${username}:`, err.message);
  }
};


export const searchProfiles = async (keywords: string[]) => {
    
  const conditions = keywords.map((keyword) =>
      or(
        sql`bio ILIKE ${`%${keyword}%`}`,
        sql`full_name ILIKE ${`%${keyword}%`}`,
        sql`array_to_string(skill, ',') ILIKE ${`%${keyword}%`}`
      )
    );
    
  try {
   const results = await db
      .select({
        profilePhoto: profiles.profilePhoto,
        fullName: profiles.fullName,
        username: profiles.username,
        bio: profiles.bio,
        followers: profiles.followers,
        joined: profiles.joined,
        links: profiles.links,
        skills: profiles.skills,
      })
      .from(profiles)
      .where(and(...conditions));

    return results;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }
};
