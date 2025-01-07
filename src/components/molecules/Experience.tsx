import { ExperienceType } from "../../store/resumeStore";
import ExperienceItem from "../atoms/experience/ExperienceItem";
import Section from "../atoms/Section";

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
