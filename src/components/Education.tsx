export default function Education() {
  const education = {
    institution: "Kookmin University",
    degree: "Bachelor of Science, Computer Science",
    location: "Seoul, South Korea",
    duration: "Mar 2020 - Expected 2026",
  };

  return (
    <section id="education">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
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
