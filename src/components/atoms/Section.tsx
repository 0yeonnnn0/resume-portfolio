import { Modal } from "./Modal";
import { HoverHighlight } from "./HoverHighlight";

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
      <div className="text-2xl font-semibold inline-block">
        <Modal
          title={title}
          trigger={<HoverHighlight>{title}</HoverHighlight>}
          content={<p>Modal Content</p>}
        />
      </div>
      <h2 className="mb-2 ml-2 border-b-2 border-black pb-2" />
      {children}
    </section>
  );
}
