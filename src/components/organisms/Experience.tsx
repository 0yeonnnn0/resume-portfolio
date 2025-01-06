import { ExperienceType } from "../../store/resumeStore";
import Section from "../atoms/Section";
import ExperienceItem from "../molecules/ExperienceItem";

export default function Experience({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <Section id="experience" title="Experience">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </Section>
  );
}
