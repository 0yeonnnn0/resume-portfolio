import { HoverHighlight } from "../HoverHighlight";
import { Modal } from "../Modal";

interface OrganizationItemProps {
  name: string;
  role: string;
  location: string;
  duration: string;
  details: string[];
}

export default function OrganizationItem({
  name,
  role,
  location,
  duration,
  details,
}: OrganizationItemProps) {
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
            content={<div>test</div>}
            title={name}
          />
          <p className="text-sm text-gray-600 ml-2">{role}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-600 text-right">{location}</p>
          <p className="text-sm text-gray-600 text-right">{duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside mt-1 text-sm text-gray-700 ml-2">
        {details.map((detail, idx) => (
          <div key={idx}>
            <span className="inline-block font-bold text-sm mr-1" key={idx}>
              •
            </span>{" "}
            {detail}
          </div>
        ))}
      </ul>
    </div>
  );
}
