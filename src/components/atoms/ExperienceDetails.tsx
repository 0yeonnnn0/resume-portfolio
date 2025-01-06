interface ExperienceDetailsProps {
  details: string[];
}

export default function ExperienceDetails({ details }: ExperienceDetailsProps) {
  return (
    <ul className="list-disc list-inside mt-1 p-0 text-xs text-gray-700">
      {details.map((detail, idx) => (
        <li key={idx}>{detail}</li>
      ))}
    </ul>
  );
}
