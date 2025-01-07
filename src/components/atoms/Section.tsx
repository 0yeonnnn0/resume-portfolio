import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import { Modal } from "@/components/atoms/modals/Modal";
interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  content?: React.ReactNode;
}

export default function Section({
  id,
  title,
  className = "",
  children,
  content,
}: SectionProps) {
  return (
    <section id={id} className={`${className} mb-2`}>
      <div className="text-2xl font-semibold inline-block">
        <Modal
          trigger={<HoverHighlight>{title}</HoverHighlight>}
          content={content}
        />
      </div>
      <h2 className="mb-2 ml-1 border-b-2 border-black pb-2" />
      {children}
    </section>
  );
}
