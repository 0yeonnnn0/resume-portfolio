import { useResumeStore } from "../../store/resumeStore";
import Section from "../atoms/Section";
import EducationItem from "../atoms/education/EducationItem";
import EducationModalContent from "./modals/EducationModalContent";

export default function Education() {
  const education = useResumeStore((state) => state.education);

  return (
    <Section
      id="education"
      title="Education"
      content={<EducationModalContent education={education} />}
    >
      <EducationItem
        education={education[0]}
      />
    </Section>
  );
}
