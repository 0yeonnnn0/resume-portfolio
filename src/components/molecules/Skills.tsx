import { useResumeStore } from "../../store/resumeStore";
import Section from "../atoms/Section";
import SkillCategory from "../atoms/SkillCategory";

export default function Skills() {
  const skills = useResumeStore((state) => state.skills);

  return (
    <Section id="skills" title="Skills">
      {skills.map((skill, index) => (
        <SkillCategory
          key={index}
          category={skill.category}
          items={skill.items}
        />
      ))}
    </Section>
  );
}
