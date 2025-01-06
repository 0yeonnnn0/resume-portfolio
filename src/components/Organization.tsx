import { useResumeStore } from "../store/resumeStore";
import Section from "./atoms/Section";

export default function Organization() {
  const organizations = useResumeStore((state) => state.organizations);

  return (
    <Section id="organization" title="Organization">
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
          <ul className="list-disc list-inside mt-1 text-xs text-gray-700">
            {org.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
