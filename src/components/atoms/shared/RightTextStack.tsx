interface RightTextStackProps {
  location: string;
  period: {
    start: string;
    end: string;
  };
}

export default function RightTextStack({
  location,
  period,
}: RightTextStackProps) {
  return (
    <div className="flex flex-col mt-1">
      <p className="text-sm text-gray-600 text-right">{location}</p>
      <p className="text-sm text-gray-600 text-right">
        {period.start} - {period.end}
      </p>
    </div>
  );
}
