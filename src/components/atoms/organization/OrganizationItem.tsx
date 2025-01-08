import DotDetails from "@/components/atoms/experience/ExperienceDetails";
import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import { Modal } from "@/components/atoms/modals/Modal";
import RightTextStack from "@/components/atoms/shared/RightTextStack";
import OrganizationItemModalContent from "@/components/molecules/modals/OrganizationItemModalContent";
import { OrganizationType } from "@/store/resumeStore";

interface OrganizationItemProps {
  organization: OrganizationType;
}

export default function OrganizationItem({
  organization,
}: OrganizationItemProps) {
  const { name, role, location, duration, details } = organization;

  return (
    <div className="mb-4">
      <div className="grid grid-cols-[1fr,auto] gap-4">
        <div>
          <Modal
            trigger={
              <HoverHighlight className="text-lg font-semibold">
                {name}
              </HoverHighlight>
            }
            content={
              <OrganizationItemModalContent organization={organization} />
            }
          />
          <p className="text-sm text-gray-600 ml-2">{role}</p>
        </div>
        <RightTextStack location={location} duration={duration} />
      </div>
      <div className="ml-2">
        <DotDetails details={details} />
      </div>
    </div>
  );
}
