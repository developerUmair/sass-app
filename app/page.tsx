import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CallToAction from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Galileo the Cosmic Navigator"
          topic="Exploring Exoplanets"
          subject="astronomy"
          duration={60}
          color="#a6d8ff"
        />

        <CompanionCard
          id="789"
          name="Ada the Code Conqueror"
          topic="Algorithms and Data Structures"
          subject="computer science"
          duration={50}
          color="#c4ffa6"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CallToAction />
      </section>
    </main>
  );
};

export default Page;
