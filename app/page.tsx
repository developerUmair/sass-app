import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CallToAction from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getBookmarkedCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { userId } = await auth();

  const [companions, bookmarkedIds, recentSessionsCompanions] =
    await Promise.all([
      getAllCompanions({ limit: 3 }),
      userId ? getBookmarkedCompanions(userId) : [],
      getRecentSessions(10),
    ]);

  const set = new Set(bookmarkedIds);

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id="123"
            {...companion}
            color={getSubjectColor(companion.subject)}
            isBookmarked={set.has(companion.id)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CallToAction />
      </section>
    </main>
  );
};

export default Page;
