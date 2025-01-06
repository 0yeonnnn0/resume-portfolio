export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Front-End",
      items: [
        "HTML",
        "CSS",
        "React",
        "React Native",
        "Expo",
        "Next.js",
        "TailwindCSS",
        "Zustand",
        "Redux",
      ],
    },
    {
      category: "Back-End",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "AWS (EC2, S3, Lambda, API Gateway)",
      ],
    },
  ];

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
