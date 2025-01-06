import { useResumeStore } from "../store/resumeStore";

export default function Education() {
  const education = useResumeStore((state) => state.education);

  return (
    <section id="education">
      <h2 className="text-2xl font-semibold border-b-2 border-black pb-2">
        Education
      </h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{education.institution}</h3>
        <p className="text-sm text-gray-600">{education.degree}</p>
        <p className="text-sm text-gray-600">
          {education.location} | {education.duration}
        </p>
      </div>
    </section>
  );
}
