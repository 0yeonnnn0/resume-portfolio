import { useResumeStore } from "../store/resumeStore";

export default function Organization() {
  const organizations = useResumeStore((state) => state.organizations);

  return (
    <section id="organization">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Organization
      </h2>
      {organizations.map((org, index) => (
        <div key={index} className="mb-4">
          <div className="grid grid-cols-[1fr,auto] gap-4">
            <div>
              <h3 className="text-lg font-semibold">{org.name}</h3>
              <p className="text-sm text-gray-600">{org.role}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600 text-right">{org.location}</p>
              <p className="text-sm text-gray-600 text-right">{org.duration}</p>
            </div>
          </div>
          <ul className="list-disc list-inside mt-2 text-xs text-gray-700">
            {org.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
