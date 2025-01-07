import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import { Modal } from "@/components/atoms/modals/Modal";

interface SkillCategoryProps {
  category: string;
  items: string[];
}

export default function SkillCategory({ category, items }: SkillCategoryProps) {
  return (
    <div className="mb-1 ml-2">
      <h3 className="font-medium text-lg">{category}</h3>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {items.map((item, idx) => (
          <Modal
            key={idx}
            trigger={
              <HoverHighlight className="block">
                <span className="inline-block font-bold">•</span> {item}
              </HoverHighlight>
            }
            content={<div>test</div>}
          />
        ))}
      </ul>
    </div>
  );
}
