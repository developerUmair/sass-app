import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import {
  getAllCompanions,
  getBookmarkedCompanions ,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

export default async function Companions({ searchParams }: SearchParams) {
const { userId } = await auth();
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  // const companions = await getAllCompanions({ subject, topic });

  const [companions, bookmarkedIds] = await Promise.all([
    getAllCompanions({ subject, topic }),
    userId ? getBookmarkedCompanions (userId) : [],
  ]);

  const set = new Set(bookmarkedIds);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions?.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            isBookmarked={set.has(companion.id)}  
          />
        ))}
      </section>
    </main>
  );
}
