import ExperiencePeriod from "../experience/ExperiencePeriod";
import ExperienceTitle from "../experience/ExperienceTitle";
import ExperienceSkills from "../experience/ExperienceSkills";
import ExperienceDetails from "../experience/ExperienceDetails";

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    location: string;
    duration: string;
    skills: string[];
    details: string[];
  };
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, company, location, duration, skills, details } = experience;

  return (
    <div className="mb-2">
      <div className="grid grid-cols-[1fr,auto] mb-0.5">
        <ExperienceTitle title={title} company={company} />
        <ExperiencePeriod location={location} duration={duration} />
      </div>
      <ExperienceSkills skills={skills} />
      <ExperienceDetails details={details} />
    </div>
  );
}
