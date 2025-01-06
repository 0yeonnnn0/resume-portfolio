import { useResumeStore } from "../store/resumeStore";
import Section from "./atoms/Section";

export default function Education() {
  const education = useResumeStore((state) => state.education);

  return (
    <Section id="education" title="Education">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{education.institution}</h3>
        <p className="text-sm text-gray-600">{education.degree}</p>
        <p className="text-sm text-gray-600">
          {education.location} | {education.duration}
        </p>
      </div>
    </Section>
  );
}
