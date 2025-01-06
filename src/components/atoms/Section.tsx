import SectionTitle from "./SectionTitle";

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${className} mb-2`}>
      <SectionTitle title={title} />
      {children}
    </section>
  );
}
