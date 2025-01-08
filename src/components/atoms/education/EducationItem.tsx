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
    <div className="mb-6 ml-2">
      <div className="text-lg font-semibold mb-1">{institution}</div>
      <div className="">
        <p className="text-sm text-gray-600">{degree}</p>
        <p className="text-sm text-gray-600">
          {location} | {duration}
        </p>
      </div>
    </div>
  );
}
