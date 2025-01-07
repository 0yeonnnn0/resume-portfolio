interface DotDetailsProps {
  details: string[];
}

export default function DotDetails({ details }: DotDetailsProps) {
  return (
    <ul className="list-disc list-inside mt-1 p-0 text-sm text-gray-700">
      {details.map((detail, idx) => (
        <div key={idx}>
          <span className="inline-block font-bold mr-1" key={idx}>
            •
          </span>
          {detail}
        </div>
      ))}
    </ul>
  );
}
