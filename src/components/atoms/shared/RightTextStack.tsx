interface RightTextStackProps {
  location: string;
  duration: string;
}

export default function RightTextStack({
  location,
  duration,
}: RightTextStackProps) {
  return (
    <div className="flex flex-col mt-1">
      <p className="text-sm text-gray-600 text-right">{location}</p>
      <p className="text-sm text-gray-600 text-right">{duration}</p>
    </div>
  );
}
