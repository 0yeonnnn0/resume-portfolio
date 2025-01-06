import { useResumeStore } from "../store/resumeStore";
import Section from "./atoms/Section";

export default function Skills() {
  const skills = useResumeStore((state) => state.skills);

  return (
    <Section id="skills" title="Skills">
      {skills.map((skill, index) => (
        <div key={index} className="mb-1">
          <h3 className="font-medium text-lg">{skill.category}</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
