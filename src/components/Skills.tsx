import { useResumeStore } from "../store/resumeStore";

export default function Skills() {
  const skills = useResumeStore((state) => state.skills);

  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Skills
      </h2>
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
    </section>
  );
}
