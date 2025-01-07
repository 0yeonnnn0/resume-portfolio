import { useResumeStore } from "../../store/resumeStore";
import Section from "../atoms/Section";
import EducationItem from "../atoms/education/EducationItem";

export default function Education() {
  const education = useResumeStore((state) => state.education);

  return (
    <Section id="education" title="Education">
      <EducationItem
        institution={education.institution}
        degree={education.degree}
        location={education.location}
        duration={education.duration}
      />
    </Section>
  );
}
