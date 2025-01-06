export default function Organization() {
  const organizations = [
    {
      name: "Kookmin Open-Source Society (KOSS)",
      role: "Front-end Mentor, Team Leader",
      location: "Seoul, South Korea",
      duration: "Sep 2023 - Jun 2024",
      details: [
        "Led an advanced web development study group, organized and taught React and TypeScript.",
        "Guided the team to complete a project utilizing these technologies.",
        "Managed the 'Mogakko' study group, fostering collaboration among new members through coding sessions, exam preparation, and shared activities.",
        "Promoted active engagement in school-related events.",
      ],
    },
  ];

  return (
    <section id="organization">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Organization
      </h2>
      {organizations.map((org, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{org.name}</h3>
          <p className="text-sm text-gray-600">{org.role}</p>
          <p className="text-sm text-gray-600">
            {org.location} | {org.duration}
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            {org.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

