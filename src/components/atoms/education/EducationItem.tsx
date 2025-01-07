import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import { Modal } from "@/components/atoms/modals/Modal";

interface EducationItemProps {
  institution: string;
  degree: string;
  location: string;
  duration: string;
}

export default function EducationItem({
  institution,
  degree,
  location,
  duration,
}: EducationItemProps) {
  return (
    <div className="mb-6">
      <Modal
        trigger={
          <HoverHighlight className="text-lg font-semibold">
            {institution}
          </HoverHighlight>
        }
        content={<div>test</div>}
      />
      <div className="ml-2">
        <p className="text-sm text-gray-600">{degree}</p>
        <p className="text-sm text-gray-600">
          {location} | {duration}
        </p>
      </div>
    </div>
  );
}
