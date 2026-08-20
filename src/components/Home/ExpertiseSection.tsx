import SectionHeading from "../common/SectionHeading";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseItems } from "../../data/home";

export default function ExpertiseSection() {
  return (
    <section className="bg-white px-5 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-[1050px]">
        <SectionHeading>AREAS OF EXPERTISE</SectionHeading>

        <div className="mt-24 grid gap-14 md:grid-cols-3 md:gap-7 lg:gap-10">
          {expertiseItems.map((item) => (
            <ExpertiseCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}