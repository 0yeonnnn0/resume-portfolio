interface SkillCategoryProps {
  category: string;
  items: string[];
}

export default function SkillCategory({ category, items }: SkillCategoryProps) {
  return (
    <div className="mb-1">
      <h3 className="font-medium text-lg">{category}</h3>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
