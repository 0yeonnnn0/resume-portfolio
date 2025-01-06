import { useResumeStore } from "../store/resumeStore";

export default function Experience() {
  const experiences = useResumeStore((state) => state.experiences);

  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Experience
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-2">
          <div className="grid grid-cols-[1fr,auto] mb-0.5">
            <div>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <h4 className="font-medium">{exp.company}</h4>
            </div>
            <div className="flex flex-col mt-1">
              <p className="text-sm text-gray-600 text-right">{exp.location}</p>
              <p className="text-sm text-gray-600 text-right">{exp.duration}</p>
            </div>
          </div>
          <h4 className="text-sm text-gray-600">{exp.skills.join(", ")}</h4>
          <ul className="list-disc list-inside mt-1 p-0 text-xs text-gray-700">
            {exp.details.map((detail: string, idx: number) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
