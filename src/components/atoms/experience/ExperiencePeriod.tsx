interface ExperiencePeriodProps {
  location: string;
  duration: string;
}

export default function ExperiencePeriod({
  location,
  duration,
}: ExperiencePeriodProps) {
  return (
    <div className="flex flex-col mt-1">
      <p className="text-sm text-gray-600 text-right">{location}</p>
      <p className="text-sm text-gray-600 text-right">{duration}</p>
    </div>
  );
}
