interface ExperienceSkillsProps {
  skills: string[];
}

export default function ExperienceSkills({ skills }: ExperienceSkillsProps) {
  return <h4 className="text-sm text-gray-600">{skills.join(", ")}</h4>;
}
