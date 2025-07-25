import BuilderCard from "@/components/cards/BuilderCard";
import { searchProfiles } from "@/lib/actions/data";
import { extractKeywords } from "@/lib/utils";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const rawQuery = (await searchParams).query?.toLowerCase() ?? "";
  const keywords = extractKeywords(rawQuery);
  const results = await searchProfiles(keywords);


  if (keywords.length === 0) {
    return (
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Please enter a search term.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl text-black font-bold mb-6">
        <span className="font-serif">{rawQuery}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No matching profiles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((profile:any) => (
            <BuilderCard key={profile.username} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}
