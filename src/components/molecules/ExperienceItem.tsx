import ExperienceSkills from "@/components/atoms/experience/ExperienceSkills";
import { Modal } from "@/components/atoms/modals/Modal";
import MediumFontTitle from "@/components/atoms/experience/MediumFontTitle";
import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import DotDetails from "@/components/atoms/experience/ExperienceDetails";
import RightTextStack from "@/components/atoms/shared/RightTextStack";
import { ExperienceType } from "@/store/resumeStore";

interface ExperienceItemProps {
  experience: ExperienceType;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, company, location, duration, skills, description } =
    experience;

  return (
    <div className="mb-2">
      <div className="grid grid-cols-[1fr,auto] mb-0.5">
        <div>
          <Modal
            trigger={
              <HoverHighlight className="text-lg font-semibold">
                {title}
              </HoverHighlight>
            }
            content={<div>test</div>}
          />
          <MediumFontTitle title={company} />
        </div>
        <RightTextStack location={location} duration={duration} />
      </div>
      <div className="ml-3">
        <ExperienceSkills skills={skills} />
        <DotDetails details={description} />
      </div>
    </div>
  );
}
