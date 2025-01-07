import ExperiencePeriod from "../atoms/experience/ExperiencePeriod";
import ExperienceSkills from "../atoms/experience/ExperienceSkills";
import ExperienceDetails from "../atoms/experience/ExperienceDetails";
import { Modal } from "../atoms/Modal";
import MediumFontTitle from "../atoms/experience/MediumFontTitle";
import { HoverHighlight } from "../atoms/HoverHighlight";

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
        <div>
          <Modal
            title={title}
            trigger={
              <HoverHighlight className="text-lg font-semibold">
                {title}
              </HoverHighlight>
            }
            content={<p>Modal Content</p>}
          />
          <MediumFontTitle title={company} />
        </div>
        <ExperiencePeriod location={location} duration={duration} />
      </div>
      <div className="ml-2">
        <ExperienceSkills skills={skills} />
        <ExperienceDetails details={details} />
      </div>
    </div>
  );
}
