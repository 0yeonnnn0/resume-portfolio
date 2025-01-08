import { useResumeStore } from "../../store/resumeStore";
import Section from "../atoms/Section";
import OrganizationItem from "../atoms/organization/OrganizationItem";
import OrganizationModalContent from "./modals/OrganizationModalContent";

export default function Organization() {
  const organizations = useResumeStore((state) => state.organizations);

  return (
    <Section
      id="organization"
      title="Organization"
      content={<OrganizationModalContent organizations={organizations} />}
    >
      {organizations.map((organization, index) => (
        <OrganizationItem key={index} organization={organization} />
      ))}
    </Section>
  );
}
