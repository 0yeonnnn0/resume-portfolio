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
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        <div className="inline-block">
          <Modal
            title={title}
            trigger={<HoverHighlight>{title}</HoverHighlight>}
            content={<p>Modal Content</p>}
          />
        </div>
      </h2>
      {children}
    </section>
  );
}
