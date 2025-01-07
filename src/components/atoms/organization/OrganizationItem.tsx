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
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-600 text-right">{location}</p>
          <p className="text-sm text-gray-600 text-right">{duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside mt-1 text-xs text-gray-700">
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
