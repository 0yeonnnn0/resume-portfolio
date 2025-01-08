import { EducationType } from "@/store/resumeStore";

interface EducationItemProps {
  education: EducationType;
}

export default function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="mb-6 ml-2">
      <div className="text-lg font-semibold mb-1">{education.institution}</div>
      <div className="">
        <p className="text-sm text-gray-600">{education.degree}</p>
        <p className="text-sm text-gray-600">
          {education.location} <br />
          {education.period.start} - {education.period.end}
        </p>
      </div>
    </div>
  );
}
