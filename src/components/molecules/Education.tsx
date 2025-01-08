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
        institution={education[0].institution}
        degree={education[0].degree}
        location={education[0].location}
        duration={education[0].duration}
      />
    </Section>
  );
}
