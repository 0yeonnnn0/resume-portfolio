import { useResumeStore } from "../../store/resumeStore";
import Section from "../atoms/Section";
import OrganizationItem from "../atoms/organization/OrganizationItem";

export default function Organization() {
  const organizations = useResumeStore((state) => state.organizations);

  return (
    <Section id="organization" title="Organization">
      {organizations.map((org, index) => (
        <OrganizationItem
          key={index}
          name={org.name}
          role={org.role}
          location={org.location}
          duration={org.duration}
          details={org.details}
        />
      ))}
    </Section>
  );
}
