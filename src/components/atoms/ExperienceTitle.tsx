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
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="font-medium">{company}</h4>
    </div>
  );
}
