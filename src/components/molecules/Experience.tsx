import { ExperienceType } from "../../store/resumeStore";
import ExperienceItem from "./ExperienceItem";
import Section from "../atoms/Section";
import ExperienceModalContent from "./modals/ExperienceModalContent";

export default function Experience({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <Section
      id="experience"
      title="Experience"
      content={<ExperienceModalContent projects={experiences} />}
    >
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </Section>
  );
}
