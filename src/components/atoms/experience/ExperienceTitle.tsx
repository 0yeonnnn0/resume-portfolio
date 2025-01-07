import { HoverHighlight } from "../HoverHighlight";

interface ExperienceTitleProps {
  title: string;
  company: string;
}

export default function ExperienceTitle({
  title,
  company,
}: ExperienceTitleProps) {
  return (
    <div>
      <HoverHighlight className="text-lg font-semibold">{title}</HoverHighlight>
      <h4 className="font-medium">{company}</h4>
    </div>
  );
}
